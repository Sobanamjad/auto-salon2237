import SectionHeading from './SectionHeading';
import { lifeData } from '../data/content';

export default function LifeSection() {
  return (
    <section id="secbox_idx_life" className="secbox secbox_idx">
      <div className="secbox_bg">
        <div className="container">
          <div className="secbox_inner">
            <SectionHeading title="專業新知" subtext="專業新知" />

            <div className="secbox_main">
              <ul className="life-grid">
                {lifeData.map((item) => (
                  <li key={item.id} className="post-card">
                    <div className="post-card-inner">
                      <div className="post-photo">
                        <a href={item.href} title={item.title}>
                          <div className="item-fitimg wide">
                            <img
                              src={item.image}
                              alt={item.title}
                              width="400"
                              height="266"
                              loading="lazy"
                              className="fitimg"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="post-body">
                        <h3>
                          <a href={item.href} title={item.title}>
                            <span>{item.title}</span>
                          </a>
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="btnbar btnbar_idxmore">
                <a href="/life" className="btn_idxmore">
                  <span>更多專業新知</span>
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
