import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container footer-container">
                <div className="footer-brand">
                    <h2 className="logo" style={{ color: 'var(--white)' }}>
                        Brews<span style={{ color: 'var(--accent)' }}>&</span>Beans
                    </h2>
                    <p className="footer-desc">
                        Pouring passion into every cup. Visit us to experience the finest craft coffee in a warm, welcoming atmosphere.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon">IG</a>
                        <a href="#" className="social-icon">FB</a>
                        <a href="#" className="social-icon">TW</a>
                    </div>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>123 Coffee Lane, Brewville, CA 90210</p>
                    <p>hello@brewsandbeans.com</p>
                    <p>(555) 123-4567</p>

                    <div className="newsletter">
                        <input type="email" placeholder="Join our newsletter" />
                        <button className="btn btn-primary">Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Brews & Beans. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
