import { useState, useEffect, useCallback } from 'react';
import { useFancybox } from './hooks/useFancybox';
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
  // scrolled: true when scrollY >= 300 (matches customize.js threshold)
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener with requestAnimationFrame throttle — matches customize.js
  useEffect(() => {
    let rafId: number | null = null;

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY >= 300);
        rafId = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Lock body scroll when sidebar is open (matches customize.js `body.is-sidebar-open`)
  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add('is-sidebar-open');
    } else {
      document.body.classList.remove('is-sidebar-open');
    }
    return () => document.body.classList.remove('is-sidebar-open');
  }, [sidebarOpen]);

  const openSidebar = useCallback(() => setSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  // Fancybox — binds to [data-fancybox] links (like fancybox.umd.js does)
  useFancybox('[data-fancybox]');

  return (
    <div className="wrapper">

      {/* header_fixed: mobile floating button, slides in on scroll >= 300px
          matches customize.js: classList.add('is-scroll') at scrollTop >= 300 */}
      <div className={`header_fixed${scrolled ? ' is-scroll' : ''}`}>
        <a
          href="#"
          className="menu-trigger menu_switchon"
          title="選單"
          onClick={(e) => { e.preventDefault(); openSidebar(); }}
        >
          ☰
        </a>
      </div>

      {/* Sidebar + overlay — uses same IDs as customize.js */}
      <Sidebar open={sidebarOpen} onClose={closeSidebar} />

      {/* header-wrap: gradient bg strip, holds fixed header on desktop */}
      <div className="header-wrap">
        <Header onMenuClick={openSidebar} scrolled={scrolled} />
      </div>

      {/* Banner sits directly below header-wrap.
          On desktop header is position:fixed so banner is visible behind it */}
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

      {/* FAB + mobile bottom bar */}
      <StickyButtons
        onMenuClick={openSidebar}
        scrolled={scrolled}
      />
    </div>
  );
}
