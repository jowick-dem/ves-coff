import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const base = import.meta.env.BASE_URL;
  const images = [
    `${base}assets/photo-9.webp`,
    `${base}assets/photo-10.webp`,
    `${base}assets/photo-11.webp`,
    `${base}assets/photo-12.webp`,
    `${base}assets/photo-1.webp`,
    `${base}assets/photo-2.webp`,
    `${base}assets/photo-3.webp`,
    `${base}assets/photo-4.webp`,
    `${base}assets/photo-5.webp`,
    `${base}assets/photo-6.webp`,
    `${base}assets/photo-7.webp`,
    `${base}assets/photo-8.webp`
  ];

  return (
    <section id="gallery" className="section gallery-wrap">
      <div className="section-header fade-in-section">
        <h2 style={{ fontFamily: "'Oregano', cursive" }}>Moments at Vespa</h2>
        <p style={{ fontFamily: "'Reenie Beanie', cursive", fontSize: '2rem', fontStyle: 'normal', letterSpacing: '-1px', wordSpacing: '-4px' }}>
          A glimpse into our open-air sanctuary.
        </p>
      </div>
      <div className="masonry-grid fade-in-section">
        {images.map((src, i) => (
          <div key={i} className="masonry-item">
            <img loading="lazy" src={src} alt={`Gallery Image ${i+1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Gallery;
