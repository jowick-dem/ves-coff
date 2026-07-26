import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };

  return (
    <>
      <nav id="navbar" style={{
        padding: scrolled ? '0.5rem 5%' : '1rem 5%',
        boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : '0 2px 10px rgba(0,0,0,0.05)'
      }}>
        <div className="logo-container">
          <img src={`${import.meta.env.BASE_URL}logo_no_bg.png`} alt="Vespa Coffee Logo" className="logo-img" onError={(e) => e.target.style.display = 'none'} />
          <a href="#" className="logo-text">VESPA COFFEE</a>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#visit">Visit Us</a>
        </div>
        <button className={`hamburger ${isOpen ? 'open' : ''}`} aria-label="Open menu" onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-overlay ${isOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <button className="drawer-close" onClick={toggleMenu} aria-label="Close menu">&#10005;</button>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#menu" onClick={toggleMenu}>Menu</a>
        <a href="#gallery" onClick={toggleMenu}>Gallery</a>
        <a href="#visit" onClick={toggleMenu}>Visit Us</a>
      </div>
    </>
  );
};
export default Navbar;
