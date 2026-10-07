import { menuItems } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_main">
        <div className="container">
          <div className="footer-row">
            <div className="footer-left">
              <h4>中正大學企管校友會</h4>
              <ul className="footer-info-list">
                <li>
                  <span className="info-title">電話</span>
                  <span>：</span>
                  <span>
                    <a href="tel:052720563">05-272-0563</a>
                  </span>
                </li>
                <li>
                  <span className="info-title">地址</span>
                  <span>：</span>
                  <span>
                    <a
                      href="https://www.google.com/maps?q=621嘉義縣民雄鄉三興村大學路一段168"
                      target="_blank"
                      rel="noreferrer"
                    >
                      621嘉義縣民雄鄉三興村大學路一段168
                    </a>
                  </span>
                </li>
              </ul>
              <ul className="footer-social">
                <li>
                  <a
                    href="https://www.facebook.com/groups/1666551216927137/?locale=zh_TW"
                    target="_blank"
                    rel="noreferrer"
                    title="Facebook"
                  >
                    f Facebook
                  </a>
                </li>
                <li>
                  <a href="/" title="回首頁">
                    ⌂ 回首頁
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-right">
              <h4>Menu</h4>
              <div className="footer-menu-grid">
                {menuItems.map((m) => (
                  <a key={m.href} href={m.href}>
                    <span className="menu-text">{m.label}</span>
                    <span className="menu-subtext">{m.subLabel}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_btm">
        <div className="container">
          <div className="footer-btm-row">
            <span>
              © 中正大學企管校友會 All rights reserved.{' '}
              <a href="/privacy">隱私權</a>
            </span>
            <span>
              Design by{' '}
              <a href="https://posu.tw/" target="_blank" rel="noreferrer">
                POSU
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
