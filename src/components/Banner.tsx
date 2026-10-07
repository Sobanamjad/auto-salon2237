import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { bannerImages } from '../data/content';

// Swiper bundle CSS (swiper 11 structure)
import 'swiper/swiper-bundle.css';

export default function Banner() {
  const swiperRef = useRef<Swiper | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Exact settings from swiper_cust_banner.js
    swiperRef.current = new Swiper(containerRef.current, {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      // æ–°å¢žé€™å…©å€‹è¨­å®šï¼Œèƒ½å¢žåŠ ç©©å®šæ€§
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: '.banner-next',
        prevEl: '.banner-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    return () => {
      swiperRef.current?.destroy(true, true);
    };
  }, []);

  return (
    <div className="banner-container">
      {/* .swiper-banner matches the selector in swiper_cust_banner.js */}
      <div className="swiper swiper-banner" ref={containerRef}>
        <ul className="swiper-wrapper">
          {bannerImages.map((img, i) => (
            <li className="swiper-slide" key={i}>
              <div className="idx-banner">
                <img
                  src={img.src}
                  alt={img.alt}
                  width="1712"
                  height="624"
                  fetchPriority={i === 0 ? 'high' : undefined}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              </div>
            </li>
          ))}
        </ul>

        {/* Navigation arrows */}
        <div className="banner-prev" />
        <div className="banner-next" />

        {/* Pagination dots */}
        <div className="swiper-pagination" />
      </div>
    </div>
  );
}
