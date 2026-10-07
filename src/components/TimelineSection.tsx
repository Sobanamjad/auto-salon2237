import SectionHeading from './SectionHeading';
import { timelineData } from '../data/content';

// Group by year
function groupByYear(items: typeof timelineData) {
  const map: Record<string, typeof timelineData> = {};
  items.forEach((item) => {
    if (!map[item.year]) map[item.year] = [];
    map[item.year].push(item);
  });
  return map;
}

export default function TimelineSection() {
  const grouped = groupByYear(timelineData);
  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <section id="secbox_idx_timeline" className="secbox secbox_idx">
      <div className="secbox_bg">
        <div className="container">
          <div className="secbox_inner">
            <SectionHeading title="本會記事" subtext="本會記事" />

            <div className="secbox_main">
              <div className="timeline-event">
                <div className="timeline-area">
                  {years.map((year) => (
                    <div key={year}>
                      <div className="timeline-year-block">
                        <span className="timeline-year-label">{year}年</span>
                      </div>
                      {grouped[year].map((item) => (
                        <div key={item.id} className="timeline-card">
                          <div className="timeline-image">
                            <div className="card-photo">
                              <a href={item.href} title={item.title}>
                                <img
                                  src={item.image}
                                  width="1024"
                                  height="1024"
                                  alt={item.title}
                                  loading="lazy"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="timeline-body">
                            <div className="timeline-date-box">
                              <span className="year">{item.year}</span>
                              <span className="month">{item.month}</span>
                              <span className="day">{item.day}</span>
                            </div>
                            <h3>
                              <a href={item.href} title={item.title}>
                                <span>{item.title}</span>
                              </a>
                            </h3>
                            <p>{item.description}</p>
                            <a href={item.href} className="timeline-readmore">
                              繼續閱讀 ›
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="btnbar btnbar_idxmore">
              <a href="/timeline" className="btn_idxmore">
                <span>更多本會記事</span>
                <span>›</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
