import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const base = import.meta.env.BASE_URL;
  const portraits = [
    `${base}assets/photo-1.webp`,
    `${base}assets/photo-2.webp`,
    `${base}assets/photo-3.webp`,
    `${base}assets/photo-4.webp`,
    `${base}assets/photo-5.webp`,
    `${base}assets/photo-6.webp`,
    `${base}assets/photo-7.webp`,
    `${base}assets/photo-8.webp`,
    `${base}assets/photo-15.webp`,
    `${base}assets/photo-17.webp`,
    `${base}assets/photo-18.webp`,
    `${base}assets/photo-21.webp`,
    `${base}assets/photo-22.webp`,
    `${base}assets/photo-24.webp`,
    `${base}assets/photo-25.webp`,
    `${base}assets/photo-26.webp`,
    `${base}assets/photo-27.webp`,
    `${base}assets/photo-28.webp`,
    `${base}assets/photo-29.webp`,
    `${base}assets/photo-30.webp`,
    `${base}assets/photo-31.webp`,
    `${base}assets/photo-32.webp`,
    `${base}assets/photo-33.webp`,
    `${base}assets/photo-34.webp`,
    `${base}assets/photo-35.webp`,
    `${base}assets/photo-36.webp`,
    `${base}assets/photo-37.webp`,
    `${base}assets/photo-38.webp`,
    `${base}assets/photo-40.webp`,
    `${base}assets/photo-41.webp`
  ];

  const landscapes = [
    `${base}assets/photo-9.webp`,
    `${base}assets/photo-10.webp`,
    `${base}assets/photo-11.webp`,
    `${base}assets/photo-12.webp`,
    `${base}assets/photo-13.webp`,
    `${base}assets/photo-14.webp`,
    `${base}assets/photo-19.webp`,
    `${base}assets/photo-20.webp`,
    `${base}assets/photo-23.webp`
  ];

  return (
    <section id="gallery" className="section gallery-wrap">
      <div className="section-header fade-in-section">
        <h2 style={{ fontFamily: "'Oregano', cursive" }}>Moments at Vespa</h2>
        <p style={{ fontFamily: "'Reenie Beanie', cursive", fontSize: '2rem', fontStyle: 'normal', letterSpacing: '-1px', wordSpacing: '-4px' }}>
          A glimpse into our open-air sanctuary.
        </p>
      </div>

      <div className="gallery-section fade-in-section">
        <h3 style={{ fontFamily: "'Oregano', cursive", textAlign: 'center', marginBottom: '20px' }}>Portraits</h3>
        <div className="masonry-grid portrait-grid">
          {portraits.map((src, i) => (
            <div key={i} className="masonry-item">
              <img loading="lazy" src={src} alt={`Portrait ${i+1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="gallery-section fade-in-section" style={{ marginTop: '40px' }}>
        <h3 style={{ fontFamily: "'Oregano', cursive", textAlign: 'center', marginBottom: '20px' }}>Landscapes</h3>
        <div className="masonry-grid landscape-grid">
          {landscapes.map((src, i) => (
            <div key={i} className="masonry-item">
              <img loading="lazy" src={src} alt={`Landscape ${i+1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Gallery;
