import React from 'react';
import './Banner.css';
import bgImg from '../../../public/assets/photo-6.webp';

const Banner = () => {
  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="hero-content">
        <h1 style={{ letterSpacing: '-1px' }}>Vespa Coffee</h1>
        <p style={{ fontFamily: "'Reenie Beanie', cursive", fontSize: '2rem', fontStyle: 'normal', letterSpacing: '-0.5px', wordSpacing: '-2px' }}>
          Sejuta Cerita. Earthy vibes and endless horizons.
        </p>
        <a href="#visit" className="btn btn-hero">Visit Us</a>
      </div>
    </section>
  );
};

export default Banner;
