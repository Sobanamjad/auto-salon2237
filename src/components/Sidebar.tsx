import { menuItems } from '../data/content';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: Props) {
  return (
    <>
      <div
        id="sidebar-overlay"
        className={`sidebar-overlay${open ? ' show' : ''}`}
        onClick={onClose}
      />
      <div id="sidebar" className={`sidebar${open ? ' show' : ''}`}>
        <div className="sidebar-header">
          <button id="sidebar-close" className="sidebar-close" onClick={onClose} aria-label="關閉">
            ✕
          </button>
        </div>

        <div className="sidebar-body custom-scrollbar">
          <div className="sidebar-section">
            <h3 className="sidebar-section-heading">選單</h3>
            <ul className="sidebar_menu">
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

        <div className="sidebar-footer">© 中正大學企管校友會</div>
      </div>
    </>
  );
}
