import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import SectionHeading from './SectionHeading';
import { albumsData } from '../data/content';

export default function AlbumsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Exact logic from swiper_cust_itemslide.js
    // data-max-cols="3" on the outer box → delete 1400 breakpoint
    const maxCols = 3;

    const myBreakpoints: Record<number, { slidesPerView: number; spaceBetween?: number }> = {
      576: { slidesPerView: 1 },
      768: { slidesPerView: 2, spaceBetween: 32 },
      992: { slidesPerView: 3, spaceBetween: 32 },
      1400: { slidesPerView: 4, spaceBetween: 32 },
    };

    if (maxCols === 3) {
      // At 1400px+ it will inherit 992px settings (3 columns)
      delete myBreakpoints[1400];
    }

    swiperRef.current = new Swiper(containerRef.current, {
      modules: [Navigation, Autoplay],
      watchOverflow: true,
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: '.itemslide-next',
        prevEl: '.itemslide-prev',
      },
      breakpoints: myBreakpoints,
    });

    return () => {
      swiperRef.current?.destroy(true, true);
    };
  }, []);

  return (
    <section id="secbox_idx_albums" className="secbox secbox_idx">
      <div className="secbox_bg">
        <div className="container">
          <div className="secbox_inner">
            <SectionHeading title="活動花絮" subtext="活動花絮" />

            <div className="secbox_main">
              {/* itemslide-container with data-max-cols matching original */}
              <div className="itemslide-container" data-max-cols="3">
                <div className="swiper swiper-itemslide" ref={containerRef}>
                  <ul className="swiper-wrapper">
                    {albumsData.map((a) => (
                      <li className="swiper-slide" key={a.id}>
                        <div className="card card_albums effect_albums">
                          <div className="row g-3">
                            <div className="">
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
                                  <div className="card-mask" />
                                </a>
                              </div>
                            </div>

                            <div className="">
                              <div className="card-body">
                                <h3 className="card-name">
                                  <a href={a.href} title={a.title}>
                                    <span className="card-name-text">{a.title}</span>
                                  </a>
                                </h3>
                              </div>
                            </div>

                            <div className="">
                              <div className="card-btnbar card-btnbar_more">
                                <a href={a.href} className="card-btn card-btn_more" title={a.title}>
                                  <span className="card-btn-text">更多</span>
                                  <span>›</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Navigation buttons — match original class names for Swiper */}
                  <div className="itemslide-prev" tabIndex={0} role="button" aria-label="Previous slide" />
                  <div className="itemslide-next" tabIndex={0} role="button" aria-label="Next slide" />
                </div>
              </div>

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
