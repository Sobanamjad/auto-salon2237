import SectionHeading from './SectionHeading';
import { newsData } from '../data/content';

export default function NewsSection() {
  return (
    <section id="secbox_idx_news" className="secbox secbox_idx secbox_idx_leftphotos">
      <div className="secbox_bg">
        <div className="container">
          <div className="secbox_inner">
            <SectionHeading title="最新消息" subtext="最新消息" />

            <div className="secbox_main">
              <ul className="news-grid">
                {newsData.map((item) => (
                  <li key={item.id} className="news-card">
                    <div className="news-card-date-box">
                      <div className="news-date">
                        <span className="year">{item.year}</span>
                        <span className="month">{item.month}</span>
                        <span className="day">{item.day}</span>
                      </div>
                    </div>

                    <div className="news-image">
                      <a href={item.href} title={item.title}>
                        <div className="item-fitimg">
                          <img
                            src={item.image}
                            alt={item.title}
                            width="1024"
                            height="1024"
                            loading="lazy"
                            className="fitimg"
                          />
                        </div>
                      </a>
                    </div>

                    <div className="news-card-body">
                      <h3>
                        <a href={item.href} title={item.title}>
                          <span className="card-name-text">{item.title}</span>
                        </a>
                      </h3>
                      <div className="description" style={{ whiteSpace: 'pre-line' }}>
                        {item.description}
                      </div>
                      <a href={item.href} className="news-more-btn" title={item.title}>
                        <span>更多</span>
                        <span>›</span>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="btnbar btnbar_idxmore">
                <a href="/news" className="btn_idxmore">
                  <span>更多最新消息</span>
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
