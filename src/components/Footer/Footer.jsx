import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">Vespa Coffee</a>
      <div className="social-links">
        <a href="https://www.instagram.com/ves.coff_">Instagram</a>
        <a href="#footer-logo">Facebook</a>
        <a href="https://www.tiktok.com/@vespa.coffee_">Tiktok</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Vespa Coffee. All Rights Reserved.</p>
    </footer>
  );
};
export default Footer;
