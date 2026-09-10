import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

const AccessibilityContext = createContext(null);

const DEFAULT_SETTINGS = {
  voiceMode: false,
  tooltip: false,
  lineHeight: 0, // 0 = normal, 1 = 1.8, 2 = 2.2
  textAlign: 'normal', // 'normal', 'left', 'justify', 'center'
  saturation: 'normal', // 'normal', 'high', 'grayscale', 'low'
  contrast: 'normal', // 'normal', 'dark', 'light', 'invert'
  highlightLinks: false,
  textSize: 0, // 0 = normal (100%), 1 = 120%, 2 = 140%, 3 = 160%
  letterSpacing: 0, // 0 = normal, 1 = 2px, 2 = 4px
  pauseAnimations: false,
  hideImages: false,
  dyslexiaFont: false,
  largeCursor: false,
  widgetPosition: 'right', // 'left', 'right', 'hidden'
};

// Module-level reference to prevent Chromium garbage collection bug
let currentUtterance = null;
let cachedIdVoice = null;

function loadIndonesianVoice() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  // 1. Try to find Indonesian specific voice (Google Bahasa Indonesia, Microsoft Gadis, etc.)
  const idVoice = voices.find(
    (v) =>
      v.lang === 'id-ID' ||
      v.lang === 'id_ID' ||
      v.lang.startsWith('id') ||
      v.name.toLowerCase().includes('indonesia') ||
      v.name.toLowerCase().includes('gadis') ||
      v.name.toLowerCase().includes('andika')
  );

  if (idVoice) {
    cachedIdVoice = idVoice;
    return idVoice;
  }

  // 2. Fallback to default or first available voice
  const defaultVoice = voices.find((v) => v.default) || voices[0];
  cachedIdVoice = defaultVoice;
  return defaultVoice;
}

export function AccessibilityProvider({ children }) {
  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem('pacimahi_a11y_settings');
      if (saved) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
      }
    } catch {
      // ignore JSON parse errors
    }
    return DEFAULT_SETTINGS;
  });

  const lastSpokenRef = useRef({ text: '', time: 0 });
  const hoverTimerRef = useRef(null);

  // Preload voices immediately on mount
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    loadIndonesianVoice();
    window.speechSynthesis.onvoiceschanged = () => {
      loadIndonesianVoice();
    };
  }, []);

  // Instant Zero-Delay Text-to-Speech engine
  const speakText = useCallback((text, priority = false) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window) || !text) return;

    const trimmed = text.trim();
    if (!trimmed) return;

    const now = Date.now();
    // Prevent duplicate speech of the exact same text within 800ms unless priority
    if (!priority && lastSpokenRef.current.text === trimmed && now - lastSpokenRef.current.time < 800) {
      return;
    }

    lastSpokenRef.current = { text: trimmed, time: now };

    try {
      // Force resume in case browser suspended audio
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(trimmed);
      utterance.lang = 'id-ID';
      utterance.rate = 1.05; // Slightly faster for responsive feel
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      const voice = cachedIdVoice || loadIndonesianVoice();
      if (voice) {
        utterance.voice = voice;
      }

      // Keep reference to prevent GC bug
      currentUtterance = utterance;
      utterance.onend = () => {
        if (currentUtterance === utterance) {
          currentUtterance = null;
        }
      };
      utterance.onerror = () => {
        if (currentUtterance === utterance) {
          currentUtterance = null;
        }
      };

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('TTS speak error:', e);
    }
  }, []);

  // Extract natural Indonesian description from any DOM element
  const getElementSpeech = useCallback((target) => {
    if (!target || typeof target.closest !== 'function') return '';
    if (target.closest('[aria-hidden="true"]') || target.closest('script') || target.closest('style') || target.closest('.a11y-panel-header')) {
      return '';
    }

    const tagName = target.tagName ? target.tagName.toUpperCase() : '';
    const role = target.getAttribute ? target.getAttribute('role') : null;

    // 1. Aria-label / title / placeholder
    const ariaLabel = target.getAttribute ? target.getAttribute('aria-label') : null;
    const title = target.getAttribute ? target.getAttribute('title') : null;
    const placeholder = target.getAttribute ? target.getAttribute('placeholder') : null;

    // 2. Text Content (cleaned)
    let directText = '';
    if (tagName.match(/^H[1-6]$/) || tagName === 'P' || tagName === 'SPAN' || tagName === 'BUTTON' || tagName === 'A' || tagName === 'LABEL' || tagName === 'LI') {
      directText = target.innerText?.trim() || target.textContent?.trim() || '';
    } else {
      // If container, find closest meaningful text
      const meaningfulChild = target.querySelector('h1, h2, h3, h4, h5, h6, .card-title, .title, p, span, a, button');
      if (meaningfulChild) {
        directText = meaningfulChild.innerText?.trim() || meaningfulChild.textContent?.trim() || '';
      }
    }

    if (directText.length > 120) {
      directText = directText.substring(0, 120) + '...';
    }

    const label = ariaLabel || title || (tagName === 'INPUT' || tagName === 'TEXTAREA' ? placeholder : directText) || directText;
    if (!label || label.length < 2) return '';

    // Determine descriptor in Indonesian
    let descriptor = '';
    if (tagName === 'A' || role === 'link') {
      descriptor = 'tautan';
    } else if (tagName === 'BUTTON' || role === 'button' || role === 'switch') {
      if (role === 'switch') {
        const isChecked = target.getAttribute('aria-checked') === 'true';
        descriptor = `sakelar, ${isChecked ? 'aktif' : 'nonaktif'}`;
      } else {
        descriptor = 'tombol';
      }
    } else if (tagName === 'INPUT') {
      const type = target.type?.toLowerCase();
      if (type === 'checkbox') {
        descriptor = `kotak centang, ${target.checked ? 'dicentang' : 'tidak dicentang'}`;
      } else if (type === 'radio') {
        descriptor = `tombol pilihan, ${target.checked ? 'terpilih' : 'tidak terpilih'}`;
      } else if (type === 'search') {
        descriptor = 'kolom pencarian';
      } else {
        descriptor = 'kolom input';
      }
    } else if (tagName === 'TEXTAREA') {
      descriptor = 'kolom teks';
    } else if (tagName === 'SELECT') {
      descriptor = 'kotak pilihan';
    } else if (tagName.match(/^H[1-6]$/)) {
      descriptor = 'judul';
    }

    return descriptor ? `${label}, ${descriptor}` : label;
  }, []);

  // Persist settings and apply CSS data-attributes
  useEffect(() => {
    try {
      localStorage.setItem('pacimahi_a11y_settings', JSON.stringify(settings));
    } catch {
      // ignore storage errors
    }

    const doc = document.documentElement;
    const body = document.body;

    // 0. Voice Mode
    if (settings.voiceMode) {
      doc.setAttribute('data-a11y-voice-mode', 'true');
    } else {
      doc.removeAttribute('data-a11y-voice-mode');
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    }

    // 1. Tooltip mode
    if (settings.tooltip) {
      doc.setAttribute('data-a11y-tooltip', 'true');
    } else {
      doc.removeAttribute('data-a11y-tooltip');
    }

    // 2. Line Height
    if (settings.lineHeight === 1) {
      doc.setAttribute('data-a11y-line-height', '1.8');
    } else if (settings.lineHeight === 2) {
      doc.setAttribute('data-a11y-line-height', '2.2');
    } else {
      doc.removeAttribute('data-a11y-line-height');
    }

    // 3. Text Align
    if (settings.textAlign !== 'normal') {
      doc.setAttribute('data-a11y-text-align', settings.textAlign);
    } else {
      doc.removeAttribute('data-a11y-text-align');
    }

    // 4. Saturation
    if (settings.saturation !== 'normal') {
      doc.setAttribute('data-a11y-saturation', settings.saturation);
    } else {
      doc.removeAttribute('data-a11y-saturation');
    }

    // 5. Contrast
    if (settings.contrast !== 'normal') {
      doc.setAttribute('data-a11y-contrast', settings.contrast);
    } else {
      doc.removeAttribute('data-a11y-contrast');
    }

    // 6. Highlight Links
    if (settings.highlightLinks) {
      doc.setAttribute('data-a11y-highlight-links', 'true');
    } else {
      doc.removeAttribute('data-a11y-highlight-links');
    }

    // 7. Text Size
    if (settings.textSize === 1) {
      doc.setAttribute('data-a11y-text-size', '120');
    } else if (settings.textSize === 2) {
      doc.setAttribute('data-a11y-text-size', '140');
    } else if (settings.textSize === 3) {
      doc.setAttribute('data-a11y-text-size', '160');
    } else {
      doc.removeAttribute('data-a11y-text-size');
    }

    // 8. Letter Spacing
    if (settings.letterSpacing === 1) {
      doc.setAttribute('data-a11y-letter-spacing', '2');
    } else if (settings.letterSpacing === 2) {
      doc.setAttribute('data-a11y-letter-spacing', '4');
    } else {
      doc.removeAttribute('data-a11y-letter-spacing');
    }

    // 9. Pause Animations
    if (settings.pauseAnimations) {
      doc.setAttribute('data-a11y-pause-animations', 'true');
    } else {
      doc.removeAttribute('data-a11y-pause-animations');
    }

    // 10. Hide Images
    if (settings.hideImages) {
      doc.setAttribute('data-a11y-hide-images', 'true');
    } else {
      doc.removeAttribute('data-a11y-hide-images');
    }

    // 11. Dyslexia Font
    if (settings.dyslexiaFont) {
      doc.setAttribute('data-a11y-dyslexia-font', 'true');
    } else {
      doc.removeAttribute('data-a11y-dyslexia-font');
    }

    // 12. Large Cursor
    if (settings.largeCursor) {
      doc.setAttribute('data-a11y-large-cursor', 'true');
      body.classList.add('a11y-large-cursor');
    } else {
      doc.removeAttribute('data-a11y-large-cursor');
      body.classList.remove('a11y-large-cursor');
    }
  }, [settings]);

  // Global Interaction Listeners for Voice Mode (Focus, Mouse Hover, Click)
  useEffect(() => {
    if (!settings.voiceMode || typeof window === 'undefined') return;

    // 1. Keyboard TAB / Focus
    const handleFocusIn = (e) => {
      const speech = getElementSpeech(e.target);
      if (speech) {
        speakText(speech);
      }
    };

    // 2. Mouse Hover (Mouseover / Pointerover on headings, paragraphs, cards, buttons, links)
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      // Find closest interactive or content element
      const interactiveEl = target.closest('a, button, input, select, textarea, [role="button"], [role="switch"], h1, h2, h3, h4, h5, h6, p, li, .quick-access__card, .news-card, .service-guide__card, .a11y-card');
      if (!interactiveEl) return;

      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }

      // Fast 60ms debounce for natural hover reading
      hoverTimerRef.current = setTimeout(() => {
        const speech = getElementSpeech(interactiveEl);
        if (speech) {
          speakText(speech);
        }
      }, 60);
    };

    // 3. Click interaction (Instant voice response)
    const handleClick = (e) => {
      const target = e.target;
      if (!target) return;

      const interactiveEl = target.closest('button, a, input, select, textarea, [role="button"], [role="switch"], .quick-access__card, .news-card, .a11y-card');
      if (interactiveEl) {
        const speech = getElementSpeech(interactiveEl);
        if (speech) {
          speakText(speech, true);
        }
      }
    };

    document.addEventListener('focusin', handleFocusIn, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('click', handleClick, { passive: true });

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('click', handleClick);
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }
    };
  }, [settings.voiceMode, getElementSpeech, speakText]);

  // Toggle Handlers
  const toggleVoiceMode = () => {
    setSettings((prev) => {
      const nextVal = !prev.voiceMode;
      if (nextVal) {
        speakText('Mode suara aktif. Setiap elemen, tombol, dan teks yang Anda pilih atau sorot akan dibacakan.', true);
      } else {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
          window.speechSynthesis.cancel();
        }
      }
      return { ...prev, voiceMode: nextVal };
    });
  };

  const toggleTooltip = () => {
    setSettings(prev => ({ ...prev, tooltip: !prev.tooltip }));
  };

  const cycleLineHeight = () => {
    setSettings(prev => ({
      ...prev,
      lineHeight: (prev.lineHeight + 1) % 3, // 0 -> 1 -> 2 -> 0
    }));
  };

  const cycleTextAlign = () => {
    const modes = ['normal', 'left', 'justify', 'center'];
    setSettings(prev => {
      const nextIndex = (modes.indexOf(prev.textAlign) + 1) % modes.length;
      return { ...prev, textAlign: modes[nextIndex] };
    });
  };

  const cycleSaturation = () => {
    const modes = ['normal', 'high', 'grayscale', 'low'];
    setSettings(prev => {
      const nextIndex = (modes.indexOf(prev.saturation) + 1) % modes.length;
      return { ...prev, saturation: modes[nextIndex] };
    });
  };

  const cycleContrast = () => {
    const modes = ['normal', 'dark', 'light', 'invert'];
    setSettings(prev => {
      const nextIndex = (modes.indexOf(prev.contrast) + 1) % modes.length;
      return { ...prev, contrast: modes[nextIndex] };
    });
  };

  const toggleHighlightLinks = () => {
    setSettings(prev => ({ ...prev, highlightLinks: !prev.highlightLinks }));
  };

  const cycleTextSize = () => {
    setSettings(prev => ({
      ...prev,
      textSize: (prev.textSize + 1) % 4, // 0 -> 1 -> 2 -> 3 -> 0
    }));
  };

  const cycleLetterSpacing = () => {
    setSettings(prev => ({
      ...prev,
      letterSpacing: (prev.letterSpacing + 1) % 3, // 0 -> 1 -> 2 -> 0
    }));
  };

  const togglePauseAnimations = () => {
    setSettings(prev => ({ ...prev, pauseAnimations: !prev.pauseAnimations }));
  };

  const toggleHideImages = () => {
    setSettings(prev => ({ ...prev, hideImages: !prev.hideImages }));
  };

  const toggleDyslexiaFont = () => {
    setSettings(prev => ({ ...prev, dyslexiaFont: !prev.dyslexiaFont }));
  };

  const toggleLargeCursor = () => {
    setSettings(prev => ({ ...prev, largeCursor: !prev.largeCursor }));
  };

  const setWidgetPosition = (position) => {
    setSettings(prev => ({ ...prev, widgetPosition: position }));
  };

  const resetAll = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setSettings(prev => ({
      ...DEFAULT_SETTINGS,
      widgetPosition: prev.widgetPosition, // preserve position preference on reset
    }));
  };

  // Check if any accessibility setting is active
  const activeCount =
    (settings.voiceMode ? 1 : 0) +
    (settings.tooltip ? 1 : 0) +
    (settings.lineHeight > 0 ? 1 : 0) +
    (settings.textAlign !== 'normal' ? 1 : 0) +
    (settings.saturation !== 'normal' ? 1 : 0) +
    (settings.contrast !== 'normal' ? 1 : 0) +
    (settings.highlightLinks ? 1 : 0) +
    (settings.textSize > 0 ? 1 : 0) +
    (settings.letterSpacing > 0 ? 1 : 0) +
    (settings.pauseAnimations ? 1 : 0) +
    (settings.hideImages ? 1 : 0) +
    (settings.dyslexiaFont ? 1 : 0) +
    (settings.largeCursor ? 1 : 0);

  return (
    <AccessibilityContext.Provider
      value={{
        settings,
        activeCount,
        speakText,
        toggleVoiceMode,
        toggleTooltip,
        cycleLineHeight,
        cycleTextAlign,
        cycleSaturation,
        cycleContrast,
        toggleHighlightLinks,
        cycleTextSize,
        cycleLetterSpacing,
        togglePauseAnimations,
        toggleHideImages,
        toggleDyslexiaFont,
        toggleLargeCursor,
        setWidgetPosition,
        resetAll,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}
