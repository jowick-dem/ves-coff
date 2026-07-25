import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <section id="menu" className="section" style={{ backgroundColor: '#fcf9f2' }}>
      <div className="section-header fade-in-section">
        <h2 style={{ fontFamily: "'Oregano', cursive" }}>Menu Highlights</h2>
        <p style={{ fontFamily: "'Reenie Beanie', cursive", fontSize: '2rem', fontStyle: 'normal', letterSpacing: '-1px', wordSpacing: '-4px' }}>
          A curated selection of our most beloved creations, crafted with passion.
        </p>
      </div>
      <div className="menu-grid">
        <div className="menu-item fade-in-section">
          <div className="menu-card-bar" style={{ background: 'var(--accent-color)' }}></div>
          <div className="menu-content">
            <span className="menu-category">Signature</span>
            <h4>Iced Black Coffee without Sugar</h4>
            <p>Pure, unmasked. Our single-origin cold brew served over ice — bold, clean, and honest.</p>
          </div>
        </div>
        <div className="menu-item fade-in-section">
          <div className="menu-card-bar" style={{ background: 'var(--accent-color)' }}></div>
          <div className="menu-content">
            <span className="menu-category">Signature</span>
            <h4>Black Coffee</h4>
            <p>A straightforward pour of rich, dark coffee. No frills, just depth and warmth in every sip.</p>
          </div>
        </div>
        <div className="menu-item fade-in-section">
          <div className="menu-card-bar" style={{ background: 'var(--accent-color)' }}></div>
          <div className="menu-content">
            <span className="menu-category">Signature</span>
            <h4>Café Latte</h4>
            <p>Smooth espresso meets silky steamed milk. Balanced, creamy, and endlessly comforting.</p>
          </div>
        </div>
        <div className="menu-item fade-in-section">
          <div className="menu-card-bar" style={{ background: '#b56a8a' }}></div>
          <div className="menu-content">
            <span className="menu-category">Copycat Series</span>
            <h4>Berry Manuka</h4>
            <p>A bright, tangy fusion of wild berries and golden manuka honey — refreshing with a floral finish.</p>
          </div>
        </div>
        <div className="menu-item fade-in-section">
          <div className="menu-card-bar" style={{ background: '#b56a8a' }}></div>
          <div className="menu-content">
            <span className="menu-category">Copycat Series</span>
            <h4>Palm Sugar Latte</h4>
            <p>Earthy espresso kissed with local palm sugar and cream. Sweet, rustic, and unmistakably Bali.</p>
          </div>
        </div>
        <div className="menu-item fade-in-section">
          <div className="menu-card-bar" style={{ background: '#5a8a5a' }}></div>
          <div className="menu-content">
            <span className="menu-category">Non Coffee</span>
            <h4>Iced Creamy Matcha</h4>
            <p>Vibrant ceremonial-grade matcha swirled with fresh cream. Earthy, smooth, and beautifully layered.</p>
          </div>
        </div>
        <div className="menu-item fade-in-section">
          <div className="menu-card-bar" style={{ background: '#5a8a5a' }}></div>
          <div className="menu-content">
            <span className="menu-category">Non Coffee</span>
            <h4>Iced Creamy Taro</h4>
            <p>Velvety taro blended to a dreamy purple hue — subtly sweet with a rich, nutty depth.</p>
          </div>
        </div>
        <div className="menu-item fade-in-section">
          <div className="menu-card-bar" style={{ background: '#5a8a5a' }}></div>
          <div className="menu-content">
            <span className="menu-category">Non Coffee</span>
            <h4>Iced Korean Strawberry Milk</h4>
            <p>Fresh strawberry compote with cold milk, inspired by Seoul café culture. Sweet, fruity, and indulgent.</p>
          </div>
        </div>
        <div className="menu-item fade-in-section">
          <div className="menu-card-bar" style={{ background: '#5a8a5a' }}></div>
          <div className="menu-content">
            <span className="menu-category">Non Coffee</span>
            <h4>Iced Chocolate</h4>
            <p>Dark, bittersweet chocolate over ice, finished with a touch of cream. Rich and deeply satisfying.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Menu;
