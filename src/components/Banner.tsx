import { useState, useEffect } from 'react';
import { bannerImages } from '../data/content';

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="banner-container">
      <div className="banner">
        {bannerImages.map((img, i) => (
          <div key={i} className={`banner-slide${i === index ? ' active' : ''}`}>
            <div className="idx-banner">
              <img
                src={img.src}
                alt={img.alt}
                width="1712"
                height="624"
                fetchPriority={i === 0 ? 'high' : undefined}
              />
            </div>
          </div>
        ))}

        <button
          className="banner-prev"
          onClick={() => setIndex((i) => (i - 1 + bannerImages.length) % bannerImages.length)}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          className="banner-next"
          onClick={() => setIndex((i) => (i + 1) % bannerImages.length)}
          aria-label="Next slide"
        >
          ›
        </button>

        <div className="banner-dots">
          {bannerImages.map((_, i) => (
            <span
              key={i}
              className={`dot${i === index ? ' active' : ''}`}
              onClick={() => setIndex(i)}
              role="button"
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
