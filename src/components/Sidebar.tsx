import { useEffect } from 'react';
import { menuItems } from '../data/content';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: Props) {
  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <>
      {/* Overlay — id="sidebar-overlay", class toggled by customize.js as is-active */}
      <div
        id="sidebar-overlay"
        className={`sidebar-overlay${open ? ' is-active' : ''}`}
        onClick={onClose}
      />

      {/* Sidebar panel — id="sidebar", class toggled as is-open */}
      <div id="sidebar" className={`sidebar${open ? ' is-open' : ''}`}>

        <div className="jsmtree-scroll-header sidebar-header">
          <button
            id="sidebar-close"
            className="sidebar-close"
            onClick={onClose}
            aria-label="關閉"
          >
            ✕
          </button>
        </div>

        <div className="jsmtree-scroll sidebar-body custom-scrollbar">
          <div className="sidebar-section">
            <h3 className="sidebar-section-heading">選單</h3>
            <ul className="jsmtree sidebar_menu">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>
                    <span className="menu-text">{item.label}</span>
                    <span className="menu-subtext">{item.subLabel}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="sidebar-footer">
          © 中正大學企管校友會
        </div>
      </div>
    </>
  );
}
