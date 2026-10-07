import SectionHeading from './SectionHeading';
import { activitiesData } from '../data/content';

export default function AnnouncementSection() {
  return (
    <section id="secbox_idx_announecment" className="secbox secbox_idx">
      <div className="secbox_bg">
        <div className="container">
          <div className="secbox_inner">
            <SectionHeading title="活動報名" subtext="活動報名" />

            <div className="secbox_main">
              <ul>
                {activitiesData.map((a) => (
                  <li key={a.id}>
                    <div className="activity-card">
                      <div className="activity-status">
                        <span className="activity-status-icon">
                          <img src="/images/time.png" alt="報名期間" style={{ verticalAlign: 'middle' }} />
                        </span>
                        <span className="activity-status-text">報名期間</span>
                      </div>

                      <div className="activity-photo">
                        <a href={a.href} title={a.title} target="_blank" rel="noreferrer">
                          <div className="item-fitimg">
                            <img
                              src={a.image}
                              alt={a.title}
                              width="1024"
                              height="1024"
                              loading="lazy"
                              className="fitimg"
                            />
                          </div>
                        </a>
                      </div>

                      <div className="activity-body">
                        <h3>
                          <a href={a.href} title={a.title} target="_blank" rel="noreferrer">
                            <span>{a.title}</span>
                          </a>
                        </h3>
                        <div className="activity-info">
                          <strong>報 名</strong>
                          <span>{a.period}</span>
                        </div>
                      </div>

                      <div>
                        <a
                          href={a.href}
                          className="activity-detail-btn"
                          title={a.title}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>詳細</span>
                          <span>↗</span>
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="btnbar btnbar_idxmore">
                <a href="/announcement" className="btn_idxmore">
                  <span>更多活動報名</span>
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
