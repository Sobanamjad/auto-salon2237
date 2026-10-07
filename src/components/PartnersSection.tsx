import SectionHeading from './SectionHeading';
import { partnersData } from '../data/content';

export default function PartnersSection() {
  return (
    <section id="secbox_idx_people" className="secbox secbox_idx">
      <div className="secbox_bg">
        <div className="container">
          <div className="secbox_inner">
            <SectionHeading title="夥伴介紹" subtext="夥伴介紹" />

            <div className="secbox_main">
              <ul className="partners-grid">
                {partnersData.map((p) => (
                  <li key={p.id} className="partner-card">
                    <div className="partner-photo">
                      <a href={p.href} target="_blank" rel="noreferrer">
                        <div className="item-fitimg">
                          <img
                            src={p.image}
                            width="1024"
                            height="1024"
                            alt={p.name}
                            loading="lazy"
                            className="fitimg"
                          />
                        </div>
                      </a>
                    </div>
                    <h3>
                      <a href={p.href} target="_blank" rel="noreferrer">
                        <span>{p.name}</span>
                      </a>
                    </h3>
                    <div className="partner-slogan">{p.slogan}</div>
                    <p className="partner-desc" style={{ whiteSpace: 'pre-line' }}>
                      {p.description}
                    </p>
                    <ul className="partner-meta">
                      <li>
                        <span>🏷</span>
                        <span>{p.category}</span>
                      </li>
                      {p.company && (
                        <li>
                          <span>🏢</span>
                          <span>{p.company}</span>
                        </li>
                      )}
                      <li>
                        <span>📍</span>
                        <span>{p.location}</span>
                      </li>
                    </ul>
                    <a href={p.href} className="partner-link" target="_blank" rel="noreferrer">
                      更多 ↗
                    </a>
                  </li>
                ))}
              </ul>

              <div className="btnbar btnbar_idxmore">
                <a href="/people" className="btn_idxmore">
                  <span>更多夥伴介紹</span>
                  <span>›</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
