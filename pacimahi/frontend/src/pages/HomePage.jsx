import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import QuickAccess from '../components/QuickAccess';
import StatsSection from '../components/StatsSection';
import ServiceGuide from '../components/ServiceGuide';
import ImageCarousel from '../components/ImageCarousel';
import HomeSpotlightBanners from '../components/HomeSpotlightBanners';
import NewsSection from '../components/NewsSection';
import VideoProfileSection from '../components/VideoProfileSection';
import SocialSidebar from '../components/SocialSidebar';
import VirtualAssistant from '../components/VirtualAssistant';
import AccessibilityWidget from '../components/AccessibilityWidget';
import AcoFloatingButton from '../components/AcoFloatingButton';
import CaseTrackingModal from '../components/CaseTrackingModal';
import Footer from '../components/Footer';

function HomePage() {
  const [isCaseModalOpen, setIsCaseModalOpen] = useState(false);
  const [caseModalInitialQuery, setCaseModalInitialQuery] = useState('');

  useEffect(() => {
    document.title = 'Pengadilan Agama Kota Cimahi Kelas IA | Website Resmi';
  }, []);

  const handleOpenCaseModal = (query = '') => {
    setCaseModalInitialQuery(query);
    setIsCaseModalOpen(true);
  };

  return (
    <div className="home-page">
      {/* Top Navigation */}
      <Navbar />

      {/* Floating Social Media Links on Left */}
      <SocialSidebar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with Search & Action Buttons */}
        <HeroSection onOpenCaseModal={handleOpenCaseModal} />

        {/* 2. Highlight Banner Slider / Image Carousel */}
        <ImageCarousel />

        {/* 2.5. Spotlight Banners (Zona Integritas, Alur Prioritas PTSP, Prosedur & Brosur Digital, Akta Cerai Online) */}
        <HomeSpotlightBanners />

        {/* 3. Quick Access Services Grid (8 Services) */}
        <QuickAccess onOpenCaseModal={handleOpenCaseModal} />

        {/* 4. Transparency & Case Statistics Counter */}
        <StatsSection />

        {/* 5. Interactive Service Guide, Cost Calculator & Court Schedule */}
        <ServiceGuide />

        {/* 6. News & Announcements Section (Publikasi Terkini) */}
        <NewsSection />

        {/* 7. Official Video Profile Section (Video Profil PA Cimahi) */}
        <VideoProfileSection
          videoUrl="https://youtu.be/62bIsvRcPv0?si=Fow524ngSa3DIkBs"
          videoId="62bIsvRcPv0"
        />
      </main>

      {/* Interactive SIPP Case Tracking Modal */}
      <CaseTrackingModal
        isOpen={isCaseModalOpen}
        onClose={() => setIsCaseModalOpen(false)}
        initialQuery={caseModalInitialQuery}
      />

      {/* Floating Virtual Assistant (SAPA) Chatbot on Bottom-Right */}
      <VirtualAssistant />

      {/* Floating Accessibility Features Widget (Menu Aksesibilitas) */}
      <AccessibilityWidget />

      {/* Floating ACO (Access CCTV Online) Shortcut Button */}
      <AcoFloatingButton cctvUrl="https://cctv.badilag.net/display/satker/3f0217881b5ba82ead3967e1032f6421" />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
