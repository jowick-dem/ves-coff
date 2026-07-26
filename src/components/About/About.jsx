import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [current, setCurrent] = useState(0);
  const base = import.meta.env.BASE_URL;
  const slides = [`${base}assets/photo-10.webp`, `${base}assets/photo-11.webp`, `${base}assets/photo-12.webp`, `${base}assets/photo-13.webp`, `${base}assets/photo-14.webp`];

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="about" className="section">
      <div className="about-container fade-in-section">
        <div className="about-text">
          <h3 className="about-heading" style={{ fontFamily: "'Oregano', cursive" }}>Our Story</h3>
          <p>
            Nestled in the heart of nature, Vespa Coffee isn't just a place to grab a cup—it's an experience. Surrounded by lush fields and bathed in golden twilight, our café was born out of a love for open skies, great coffee, and the timeless charm of classic Vespas.
          </p>
          <p>
            Every corner is designed to bring you peace, whether you are chatting with friends or enjoying a quiet moment alone. Discover "Sejuta Cerita" (A Million Stories) with every sip.
          </p>
        </div>
        <div className="about-slideshow">
          {slides.map((src, i) => (
            <div key={i} className={`slide ${i === current ? 'active' : ''}`}>
              <img src={src} alt="Vespa Coffee Atmosphere" width="600" height="400" />
            </div>
          ))}
          <div className="slide-dots">
            {slides.map((_, i) => (
              <span key={i} className={`dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
