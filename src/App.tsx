import { useState } from 'react';
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

  return (
    <div className="wrapper">
      <div className="header_fixed is-scroll">
        <button
          className="menu-trigger hamburger"
          onClick={() => setSidebarOpen(true)}
          aria-label="選單"
          title="選單"
        >
          ☰
        </button>
      </div>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Header onMenuClick={() => setSidebarOpen(true)} />
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
