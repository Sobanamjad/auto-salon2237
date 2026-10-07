import SectionHeading from './SectionHeading';
import { aboutContent } from '../data/content';

export default function AboutSection() {
  return (
    <section id="secbox_idx_about_single" className="secbox secbox_idx secbox_idx_about_one">
      <div className="secbox_bg">
        <div className="container">
          <div className="secbox_inner">
            <SectionHeading title="關於本會" subtext="關於本會" />

            <div className="secbox_main">
              <div className="card card_about_one">
                <div className="about-row">
                  <div className="about-col-photo">
                    <div className="card-photo">
                      <a href={aboutContent.href}>
                        <img
                          src={aboutContent.image}
                          alt={aboutContent.title}
                          width="1024"
                          height="1024"
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="about-col-body">
                    <div className="card-body">
                      <h3 className="card-name">
                        <span className="card-name-text">{aboutContent.title}</span>
                      </h3>
                      <div className="card-text editor" style={{ whiteSpace: 'pre-line' }}>
                        {aboutContent.text}
                      </div>
                      <div className="card-btnbar card-btnbar_more">
                        <a href={aboutContent.href} className="more-btn">
                          <span>更多</span>
                          <span>›</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
