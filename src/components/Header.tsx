import { menuItems } from '../data/content';

interface Props {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: Props) {
  return (
    <div className="header-wrap">
      <header className="header">
        <div className="header_bar">
          <div className="header_row">
            <div className="header-left">
              <div className="header_main">
                <div className="header_row">
                  <div className="header-one">
                    <a href="/" title="中正大學企管校友會 - 回首頁">
                      <div className="logo-text">中正大學企管校友會</div>
                    </a>
                  </div>
                  <div className="header-two">
                    <ul className="menu">
                      {menuItems.map((item) => (
                        <li key={item.href}>
                          <div className="menulink">
                            <a href={item.href}>
                              <span className="menu-text">{item.label}</span>
                              <span className="menu-subtext">{item.subLabel}</span>
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="header-three">
                    <button
                      className="menu-trigger hamburger"
                      onClick={onMenuClick}
                      aria-label="選單"
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
    </div>
  );
}
