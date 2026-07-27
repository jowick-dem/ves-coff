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
        {/* Menu-style decoration overlay */}
        <svg className="about-deco" viewBox="0 0 500 400" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Bottom band: scattered bean outlines */}
          <ellipse cx="30" cy="370" rx="12" ry="7" stroke="#c4956a" stroke-width="1.2" transform="rotate(-15 30 370)"/>
          <path d="M22 366Q30 372 38 366" stroke="#c4956a" stroke-width="0.8" fill="none" transform="rotate(-15 30 370)"/>
          <ellipse cx="90" cy="380" rx="12" ry="7" stroke="#c4956a" stroke-width="1.2" transform="rotate(10 90 380)"/>
          <path d="M82 376Q90 382 98 376" stroke="#c4956a" stroke-width="0.8" fill="none" transform="rotate(10 90 380)"/>
          <ellipse cx="160" cy="372" rx="12" ry="7" stroke="#c4956a" stroke-width="1.2" transform="rotate(-30 160 372)"/>
          <path d="M152 368Q160 374 168 368" stroke="#c4956a" stroke-width="0.8" fill="none" transform="rotate(-30 160 372)"/>
          <ellipse cx="240" cy="385" rx="12" ry="7" stroke="#c4956a" stroke-width="1.2" transform="rotate(20 240 385)"/>
          <path d="M232 381Q240 387 248 381" stroke="#c4956a" stroke-width="0.8" fill="none" transform="rotate(20 240 385)"/>
          <ellipse cx="320" cy="370" rx="12" ry="7" stroke="#c4956a" stroke-width="1.2" transform="rotate(-10 320 370)"/>
          <path d="M312 366Q320 372 328 366" stroke="#c4956a" stroke-width="0.8" fill="none" transform="rotate(-10 320 370)"/>
          <ellipse cx="400" cy="382" rx="12" ry="7" stroke="#c4956a" stroke-width="1.2" transform="rotate(25 400 382)"/>
          <path d="M392 378Q400 384 408 378" stroke="#c4956a" stroke-width="0.8" fill="none" transform="rotate(25 400 382)"/>
          <ellipse cx="460" cy="373" rx="12" ry="7" stroke="#c4956a" stroke-width="1.2" transform="rotate(-20 460 373)"/>
          <path d="M452 369Q460 375 468 369" stroke="#c4956a" stroke-width="0.8" fill="none" transform="rotate(-20 460 373)"/>

          {/* Coffee plant branch — right side */}
          <path d="M490 80Q470 120 485 170Q500 220 480 270" stroke="#c4956a" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M483 115Q465 100 455 112Q465 118 483 115" stroke="#c4956a" stroke-width="1" fill="none"/>
          <path d="M455 112Q433 100 430 110" stroke="#c4956a" stroke-width="0.6" fill="none"/>
          <path d="M483 115Q498 100 506 110Q498 118 483 115" stroke="#c4956a" stroke-width="1" fill="none"/>
          <path d="M506 110Q525 100 528 110" stroke="#c4956a" stroke-width="0.6" fill="none"/>
          <circle cx="480" cy="120" r="5" stroke="#c4956a" stroke-width="1"/>
          <circle cx="487" cy="122" r="5" stroke="#c4956a" stroke-width="1"/>

          <path d="M486 185Q468 172 460 182Q468 188 486 185" stroke="#c4956a" stroke-width="1" fill="none"/>
          <path d="M486 185Q504 172 510 182Q504 188 486 185" stroke="#c4956a" stroke-width="1" fill="none"/>
          <circle cx="484" cy="190" r="5" stroke="#c4956a" stroke-width="1"/>
          <circle cx="491" cy="192" r="5" stroke="#c4956a" stroke-width="1"/>

          <path d="M480 250Q458 238 452 248Q458 254 480 250" stroke="#c4956a" stroke-width="1" fill="none"/>
          <path d="M480 250Q500 238 505 246Q500 254 480 250" stroke="#c4956a" stroke-width="1" fill="none"/>

          {/* Palmate leaf — top-left */}
          <path d="M20 20Q30 10 42 15Q30 18 20 20" stroke="#c4956a" stroke-width="1.2" fill="none"/>
          <path d="M20 20Q30 25 45 20Q30 16 20 20" stroke="#c4956a" stroke-width="1.2" fill="none"/>
          <path d="M20 20Q28 8 35 3Q26 12 20 20" stroke="#c4956a" stroke-width="1.2" fill="none"/>
          <path d="M20 20Q36 5 48 4Q38 14 20 20" stroke="#c4956a" stroke-width="1.2" fill="none"/>
          <path d="M20 20Q12 8 8 3Q14 12 20 20" stroke="#c4956a" stroke-width="1.2" fill="none"/>
          <path d="M20 20Q23 6 20 0Q17 6 20 20" stroke="#c4956a" stroke-width="0.8" fill="none"/>

          {/* Corner bean accents */}
          <ellipse cx="14" cy="14" rx="10" ry="6" stroke="#c4956a" stroke-width="1" transform="rotate(-20 14 14)"/>
          <path d="M8 11Q14 16 20 11" stroke="#c4956a" stroke-width="0.7" fill="none" transform="rotate(-20 14 14)"/>
          <ellipse cx="486" cy="14" rx="10" ry="6" stroke="#c4956a" stroke-width="1" transform="rotate(25 486 14)"/>
          <path d="M480 11Q486 16 492 11" stroke="#c4956a" stroke-width="0.7" fill="none" transform="rotate(25 486 14)"/>
          <ellipse cx="14" cy="386" rx="10" ry="6" stroke="#c4956a" stroke-width="1" transform="rotate(-35 14 386)"/>
          <path d="M8 383Q14 388 20 383" stroke="#c4956a" stroke-width="0.7" fill="none" transform="rotate(-35 14 386)"/>
          <ellipse cx="486" cy="386" rx="10" ry="6" stroke="#c4956a" stroke-width="1" transform="rotate(15 486 386)"/>
          <path d="M480 383Q486 388 492 383" stroke="#c4956a" stroke-width="0.7" fill="none" transform="rotate(15 486 386)"/>
        </svg>

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
          <div className="about-slideshow-inner">
            {slides.map((src, i) => (
              <div key={i} className={`slide ${i === current ? 'active' : ''}`}>
                <img src={src} alt="Vespa Coffee Atmosphere" width="600" height="400" />
              </div>
            ))}
          </div>
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
