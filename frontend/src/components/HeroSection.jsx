import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch, FaShieldAlt, FaGavel, FaListAlt, FaBullhorn } from 'react-icons/fa';
import './HeroSection.css';

function HeroSection({ onOpenCaseModal }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [heroSettings, setHeroSettings] = useState({
    hero_badge: 'Zona Integritas WBK & WBBM',
    hero_title: 'Selamat Datang di Pengadilan Agama Kota Cimahi',
    hero_subtitle: 'Mewujudkan Peradilan Agama yang Agung, Bersih, dan Melayani dengan Sepenuh Hati untuk Masyarakat Kota Cimahi.',
    running_text: 'Selamat Datang di Website Resmi Pengadilan Agama Kota Cimahi Kelas II • Pelayanan PTSP Buka Senin-Jumat • Stop Pungli & Gratifikasi • Layanan e-Court MA RI Tersedia 24 Jam'
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/settings');
        if (res.data.success && Object.keys(res.data.data).length > 0) {
          setHeroSettings(prev => ({ ...prev, ...res.data.data }));
        }
      } catch (err) {
        console.warn('Using default hero settings:', err.message);
      }
    };
    fetchSettings();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (onOpenCaseModal) {
      onOpenCaseModal(searchQuery);
    }
  };

  return (
    <section className="hero">
      {/* Decorative background elements */}
      <div className="hero__bg-pattern"></div>
      <div className="hero__bg-overlay"></div>
      <div className="hero__bg-glow"></div>

      {/* Floating decorative shapes */}
      <div className="hero__shape hero__shape--1"></div>
      <div className="hero__shape hero__shape--2"></div>
      <div className="hero__shape hero__shape--3"></div>

      {/* Running Announcement Ticker */}
      {heroSettings.running_text && (
        <div className="hero__ticker">
          <div className="hero__ticker-badge">
            <FaBullhorn /> Pengumuman:
          </div>
          <div className="hero__ticker-content">
            <div className="hero__ticker-text">
              {heroSettings.running_text}
            </div>
          </div>
        </div>
      )}

      <div className="hero__content container">
        {/* Badge */}
        <div className="hero__badge animate-fade-in-down">
          <FaShieldAlt className="hero__badge-icon" />
          <span>{heroSettings.hero_badge}</span>
        </div>

        {/* Main Heading */}
        <h1 className="hero__title animate-fade-in-up">
          {heroSettings.hero_title.includes('Pengadilan Agama') ? (
            <>
              {heroSettings.hero_title.split('Pengadilan Agama')[0]}
              <span className="hero__title-highlight"> Pengadilan Agama</span>
              <br />
              <span className="hero__title-city">Kota Cimahi</span>
            </>
          ) : (
            heroSettings.hero_title
          )}
        </h1>

        {/* Subtitle */}
        <p className="hero__subtitle animate-fade-in-up animate-delay-2">
          {heroSettings.hero_subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="hero__buttons animate-fade-in-up animate-delay-3">
          <a href="#layanan" className="hero__btn hero__btn--primary">
            <FaListAlt /> Layanan Pengadilan
          </a>
          <button
            type="button"
            className="hero__btn hero__btn--secondary"
            onClick={() => onOpenCaseModal && onOpenCaseModal('')}
          >
            <FaGavel /> Cek Informasi Perkara
          </button>
        </div>

        {/* Search Bar */}
        <form className="hero__search animate-fade-in-up animate-delay-4" onSubmit={handleSearch}>
          <div className="hero__search-wrapper">
            <FaSearch className="hero__search-icon" />
            <input
              type="text"
              className="hero__search-input"
              placeholder="Cari informasi perkara (cth: 124/Pdt.G/2026/PA.Cmi) atau nama pihak..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="hero__search-btn">
              Cari
            </button>
          </div>
        </form>
      </div>

      {/* Bottom wave */}
      <div className="hero__wave">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0,40 C360,100 720,0 1080,60 C1260,80 1380,50 1440,40 L1440,100 L0,100 Z"
            fill="var(--surface-bg)"
          />
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;
