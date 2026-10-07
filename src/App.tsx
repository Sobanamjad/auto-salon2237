import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
import AboutSection from './components/AboutSection';
import TimelineSection from './components/TimelineSection';
import AnnouncementSection from './components/AnnouncementSection';
import NewsSection from './components/NewsSection';
import UniNewsSection from './components/UniNewsSection';
import PartnersSection from './components/PartnersSection';
import LifeSection from './components/LifeSection';
import AlbumsSection from './components/AlbumsSection';
import WorksSection from './components/WorksSection';
import LinksSection from './components/LinksSection';
import Footer from './components/Footer';
import StickyButtons from './components/StickyButtons';
import './App.css';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add is-scroll class to header once user scrolls down
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="wrapper">
      {/* Mobile fixed hamburger button (top-right, appears on scroll) */}
      <div className={`header_fixed${scrolled ? ' is-scroll' : ''}`}>
        <button
          className="menu-trigger"
          onClick={() => setSidebarOpen(true)}
          aria-label="選單"
          title="選單"
        >
          ☰
        </button>
      </div>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Header-wrap: on desktop this collapses to 0 height so banner shows behind fixed header */}
      <div className="header-wrap">
        <Header onMenuClick={() => setSidebarOpen(true)} scrolled={scrolled} />
      </div>

      {/* Banner — full width, sits behind fixed header on desktop */}
      <Banner />

      <main className="main">
        <div className="main_inner">
          <div className="secwrap_idx">
            <AboutSection />
            <TimelineSection />
            <AnnouncementSection />
            <NewsSection />
            <UniNewsSection />
            <PartnersSection />
            <LifeSection />
            <AlbumsSection />
            <WorksSection />
            <LinksSection />
          </div>
        </div>
      </main>

      <Footer />
      <StickyButtons onMenuClick={() => setSidebarOpen(true)} />
    </div>
  );
}
