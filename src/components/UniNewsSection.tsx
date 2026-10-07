import SectionHeading from './SectionHeading';
import { uniNewsData } from '../data/content';

export default function UniNewsSection() {
  return (
    <section id="secbox_idx_uninews" className="secbox secbox_idx">
      <div className="secbox_bg">
        <div className="container">
          <div className="secbox_inner">
            <SectionHeading title="在地新聞" subtext="在地新聞" />

            <div className="secbox_main">
              <ul className="uninews-grid">
                {uniNewsData.map((item) => (
                  <li key={item.id} className="post-card">
                    <div className="post-card-inner">
                      <div className="post-photo">
                        <a href={item.href} title={item.title}>
                          <div className="item-fitimg wide">
                            <img
                              src={item.image}
                              alt={item.title}
                              width="400"
                              height="267"
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
                        <div className="post-meta">
                          <span className="date">
                            {item.year}-{item.month}-{item.day}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="btnbar btnbar_idxmore">
                <a href="/uninews" className="btn_idxmore">
                  <span>更多在地新聞</span>
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
