import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { CartContext } from '../../context/CartContext';
import './Navbar.css';

const Navbar = ({ onCartClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          Brews<span>&</span>Beans
        </Link>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-actions">
          <button className="cart-icon-btn" onClick={onCartClick} aria-label="Open cart">
            <ShoppingBag size={24} />
            {cartCount() > 0 && <span className="cart-badge">{cartCount()}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
