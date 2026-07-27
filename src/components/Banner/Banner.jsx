import React from 'react';
import './Banner.css';
import bgImg from '../../../public/assets/photo-20.webp';

const Banner = () => {
  return (
    <section className="hero" id="home">
      <img src={bgImg} alt="Vespa Coffee Ricefield Background" className="hero-bg-img" fetchPriority="high" width="1200" height="800" />
      <div className="hero-content">
        <h1 style={{ letterSpacing: '-1px' }}>
          Vesc<img src={`${import.meta.env.BASE_URL}bean-o.png`} alt="" className="hero-bean-o" />ff Pejaten
        </h1>
        <p style={{ fontFamily: "'Reenie Beanie', cursive", fontSize: '2rem', fontStyle: 'normal', letterSpacing: '-0.5px', wordSpacing: '-2px' }}>
          Sejuta Cerita. Earthy vibes and endless horizons.
        </p>
        <a onClick={(e) => { e.preventDefault(); document.getElementById('visit')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-hero" style={{ cursor: 'pointer' }}>Visit Us</a>
      </div>
    </section>
  );
};

export default Banner;
