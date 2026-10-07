import { useState, useEffect, useRef } from 'react';

interface Props {
  onMenuClick: () => void;
  scrolled: boolean; // true when scrollY >= 300
}

export default function StickyButtons({ onMenuClick, scrolled }: Props) {
  // FAB menu open/close toggle — matches customize.js fab-trigger logic
  const [fabOpen, setFabOpen] = useState(false);
  const fabRef = useRef<HTMLDivElement>(null);

  // Close FAB when clicking outside — matches customize.js global click listener
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (fabRef.current && !fabRef.current.contains(e.target as Node)) {
        setFabOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Smooth scroll to top — matches customize.js scrolltop animate
  const scrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ===== Desktop FAB (right side) ===== */}
      <div className="sticky-fab">
        <div className="fabbox" ref={fabRef}>
          {/* Social links — shown when fab is open */}
          <div className={`fab-menu${fabOpen ? ' active' : ''}`}>
            <a
              className="fablink fablink_fb"
              href="https://www.facebook.com/groups/1666551216927137/?locale=zh_TW"
              target="_blank"
              rel="noreferrer"
              title="FaceBook"
            >
              <span className="fab-icon">f</span>
            </a>
          </div>

          {/* Trigger button — toggle fab menu */}
          <button
            className={`fablink fab-trigger${fabOpen ? ' active' : ''}`}
            aria-label="選單"
            title="選單"
            onClick={(e) => { e.stopPropagation(); setFabOpen(v => !v); }}
          >
            <span className="fab-icon">{fabOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {/* Scroll-to-top — shown when scrolled >= 300 (fablink_top + is-show)
            matches customize.js: fablink_top classList.add('is-show') */}
        <a
          href="#"
          className={`fablink fablink_top scrolltop${scrolled ? ' is-show' : ''}`}
          title="回頂端"
          onClick={scrollTop}
        >
          ↑
        </a>
      </div>

      {/* ===== Mobile bottom bar ===== */}
      <div className="sticky-btmbar">
        <div className="sticky-btmbar-container">
          {/* Menu trigger — same class as header button so customize.js picks it up */}
          <a
            href="#"
            className="sticky-actbtn actbtn_menu menu_switchon"
            title="選單"
            onClick={(e) => { e.preventDefault(); onMenuClick(); }}
          >
            <span className="sidelink-icon actbtn-icon">☰</span>
            <span className="actbtn-text">選單</span>
          </a>

          <a
            className="sticky-actbtn actbtn_fb"
            href="https://www.facebook.com/groups/1666551216927137/?locale=zh_TW"
            target="_blank"
            rel="noreferrer"
            title="FaceBook"
          >
            <span className="fab-icon" style={{ color: '#1877f2', fontSize: '20px' }}>f</span>
            <span className="actbtn-text">FB</span>
          </a>

          <div className="divider" />

          <a
            href="#"
            className="sticky-actbtn actbtn_top scrolltop"
            title="回頂端"
            onClick={scrollTop}
          >
            <span className="sidelink-icon actbtn-icon">↑</span>
            <span className="actbtn-text">TOP</span>
          </a>
        </div>
      </div>
    </>
  );
}
