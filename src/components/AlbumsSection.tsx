import SectionHeading from './SectionHeading';
import { albumsData } from '../data/content';

export default function AlbumsSection() {
  return (
    <section id="secbox_idx_albums" className="secbox secbox_idx">
      <div className="secbox_bg">
        <div className="container">
          <div className="secbox_inner">
            <SectionHeading title="活動花絮" subtext="活動花絮" />

            <div className="secbox_main">
              <ul className="albums-swiper">
                {albumsData.map((a) => (
                  <li key={a.id} className="album-card">
                    <div className="album-photo">
                      <div className="card-photo">
                        <a href={a.href} title={a.title}>
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
                    </div>
                    <div className="album-body">
                      <h3>
                        <a href={a.href} title={a.title}>
                          <span>{a.title}</span>
                        </a>
                      </h3>
                      <a href={a.href} className="album-more-btn" title={a.title}>
                        更多 ›
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="btnbar btnbar_idxmore">
                <a href="/albums" className="btn_idxmore">
                  <span>更多活動花絮</span>
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
