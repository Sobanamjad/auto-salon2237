interface Props {
  onMenuClick: () => void;
}

export default function StickyButtons({ onMenuClick }: Props) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* Desktop FAB */}
      <div className="sticky-fab">
        <div className="fab-wrapper">
          <div className="fab-menu-list">
            <a
              className="fab-link"
              href="https://www.facebook.com/groups/1666551216927137/?locale=zh_TW"
              target="_blank"
              rel="noreferrer"
              title="FaceBook"
              style={{ background: '#1877f2' }}
            >
              f
            </a>
          </div>
          <button className="fab-trigger" aria-label="選單" title="選單" onClick={onMenuClick}>
            ☰
          </button>
        </div>
        <button className="scroll-top" onClick={scrollTop} title="回頂端">
          ↑
        </button>
      </div>

      {/* Mobile bottom bar */}
      <div className="sticky-btmbar">
        <button className="actbtn" onClick={onMenuClick} aria-label="選單">
          <span className="actbtn-icon">☰</span>
          <span>選單</span>
        </button>
        <a
          className="actbtn"
          href="https://www.facebook.com/groups/1666551216927137/?locale=zh_TW"
          target="_blank"
          rel="noreferrer"
        >
          <span className="actbtn-icon" style={{ color: '#1877f2' }}>f</span>
          <span>FB</span>
        </a>
        <button className="actbtn" onClick={scrollTop} aria-label="回頂端">
          <span className="actbtn-icon">↑</span>
          <span>TOP</span>
        </button>
      </div>
    </>
  );
}
