import SectionHeading from './SectionHeading';
import { linksData } from '../data/content';

export default function LinksSection() {
  return (
    <section id="secbox_idx_link" className="secbox secbox_idx">
      <div className="secbox_bg">
        <div className="container">
          <div className="secbox_inner">
            <SectionHeading title="相關連結" subtext="相關連結" />

            <div className="secbox_main">
              <ul className="links-grid">
                {linksData.map((l) => (
                  <li key={l.id} className="link-card">
                    <div className="link-photo">
                      <a href={l.href} title={l.name} target="_blank" rel="noreferrer">
                        <div className="item-fitimg wide">
                          <img
                            src={l.image}
                            alt={l.name}
                            loading="lazy"
                            className="fitimg"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="link-body">
                      <h3>
                        <a href={l.href} title={l.name} target="_blank" rel="noreferrer">
                          <span>{l.name}</span>
                        </a>
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="btnbar btnbar_idxmore">
                <a href="/link" className="btn_idxmore">
                  <span>更多相關連結</span>
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
