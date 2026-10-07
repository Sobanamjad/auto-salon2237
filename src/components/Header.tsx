import { menuItems } from '../data/content';

interface Props {
  onMenuClick: () => void;
  scrolled?: boolean;
}

export default function Header({ onMenuClick, scrolled = false }: Props) {
  return (
    <header className={`header${scrolled ? ' is-scroll' : ''}`}>
      <div className="header_bar">
        <div className="header_row">
          <div className="header-left">
            <div className="header_main">
              <div className="header_row">

                {/* Logo */}
                <div className="header-one">
                  <a href="/" title="中正大學企管校友會 - 回首頁">
                    <div className="logo-text">中正大學企管校友會</div>
                  </a>
                </div>

                {/* Desktop nav — hidden on mobile via CSS */}
                <div className="header-two">
                  <ul className="menu">
                    {menuItems.map((item) => (
                      <li key={item.href}>
                        <div className="menulink">
                          <a href={item.href} title={item.label}>
                            <span className="menu-text">{item.label}</span>
                            <span className="menu-subtext">{item.subLabel}</span>
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mobile hamburger — hidden on desktop via CSS */}
                <div className="header-three">
                  <button
                    className="menu-trigger"
                    onClick={onMenuClick}
                    aria-label="選單"
                    title="選單"
                  >
                    ☰
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
