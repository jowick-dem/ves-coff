import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const base = import.meta.env.BASE_URL;
  const images = [
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqBp3T_As017Kbc_ioXbAFkjN_BAsSOv9HhT4uUg6g9ydXnsQyTxF6YlWEO_ghU43zNhqyMJi3zi6kNWQQo1jqIRPxNJdQzkny9u0qHnGXoFb3_KqG0pqpbDo0rxY8zAF6ezlAQABmdqVKX=w2048",
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoDCG4xk_LireFWsdh9sxGQ5ySErFAUq5dtOl4Si6R0jv6fHqc7zKtkWO5OoJmSfZVV2bdBomT12el5iHFR7eku-1WT2ReJjBMpFdfd87obUrYBP4_icH05hN2gjmascs8wy1VTJSBOhoA=w2048",
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo1X-74q-Z0pqssRI6hYBOYCPdysKLprVVg3h6iIlrsa0kRvfTB5l93bM2oVv__iB2FnrvepGan80j4wG3P11OwJWrRoyvpKVO_TIiJvQQeHb0XautMRTygtQu4_D39PJ6s9VT4v2FIKbH_=w2048",
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepN3pSE5JZ4sMK0IfJqXHr2VCkEcBboBvQzT8LwaBzfR8TBb18N6EOqhtELvgfetOMRIFXbV_SUpTJrzQwvv0XPI3BbLypUttSapkbhqtgnfoEN3Ea1IYE0K3U2ePbitkHRdMiMuf93QM67=w2048",
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
