import SectionHeading from './SectionHeading';
import { worksData } from '../data/content';

export default function WorksSection() {
  return (
    <section id="secbox_idx_works" className="secbox secbox_idx">
      <div className="secbox_bg">
        <div className="container">
          <div className="secbox_inner">
            <SectionHeading title="理監事(組織)" subtext="理監事(組織)" />

            <div className="secbox_main">
              <ul className="works-grid">
                {worksData.map((w) => (
                  <li key={w.id} className="work-card">
                    <div className="work-photo">
                      <div className="card-photo">
                        <a href={w.href} title={w.name}>
                          <div className="item-fitimg">
                            <img
                              src={w.image}
                              alt={w.name}
                              width="1024"
                              height="1024"
                              loading="lazy"
                              className="fitimg"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="work-body">
                      <h3>
                        <a href={w.href} title={w.name}>
                          <span>{w.name}</span>
                        </a>
                      </h3>
                      <a href={w.href} className="work-more-btn">
                        更多 ›
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="btnbar btnbar_idxmore">
                <a href="/works" className="btn_idxmore">
                  <span>更多理監事(組織)</span>
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
