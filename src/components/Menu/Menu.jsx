import React from 'react';
import './Menu.css';

const hotItems = [
  { name: 'Americano', desc: 'Rich espresso pulled long over hot water — smooth, bold, caffeine-forward.', price: 'Rp 8.000' },
  { name: 'Kopi Susu', desc: 'Local favourite: robust coffee meets sweet condensed milk. Creamy & classic.', price: 'Rp 10.000' },
  { name: 'Cappuccino', desc: 'Equal-parts espresso, steamed milk & velvety foam. A timeless comfort.', price: 'Rp 12.000' },
];

const icedItems = [
  { name: 'Americano', desc: 'Sharp espresso chilled over ice — refreshing, low-calorie, full-flavoured.', price: 'Rp 12.000' },
  { name: 'Kopi Susu', desc: 'Iced version of our signature milk coffee. Sweet, strong, addictive.', price: 'Rp 13.000' },
  { name: 'Cappuccino', desc: 'Frosty cappuccino with a thick cold-foam crown. Summer staple.', price: 'Rp 15.000' },
  { name: 'Palm Sugar', desc: 'Espresso swirled with caramelised palm sugar. Earthy-sweet & Bali-inspired.', price: 'Rp 15.000' },
  { name: 'Caramel', desc: 'Buttery caramel syrup meets double-shot espresso over ice. Indulgent.', price: 'Rp 15.000' },
  { name: 'Pistachio', desc: 'Nutty pistachio latte served cold. Creamy, aromatic, Insta-worthy.', price: 'Rp 15.000' },
  { name: 'Vanilla', desc: 'Classic vanilla iced latte — smooth, subtly sweet, crowd-pleaser.', price: 'Rp 15.000' },
  { name: 'Matcha', desc: 'Ceremonial-grade matcha whisked with fresh milk. Earthy & energising.', price: 'Rp 13.000' },
  { name: 'Taro', desc: 'Velvety taro blended to a dreamy purple hue — subtly sweet, rich & nutty.', price: 'Rp 13.000' },
  { name: 'Chocolate', desc: 'Dark bittersweet chocolate over ice with a touch of cream. Decadent.', price: 'Rp 13.000' },
  { name: 'Vanilla', desc: 'Creamy vanilla iced drink — light, sweet, perfect for any time.', price: 'Rp 13.000' },
];

const MenuSection = ({ title, color, items }) => (
  <div className="menu-section">
    <div className="menu-section-title-wrap">
      <div className="menu-section-bar" style={{ background: color }}></div>
      <h3 className="menu-section-title" style={{ fontFamily: "'Oregano', cursive" }}>{title}</h3>
    </div>
    <div className="menu-grid">
      {items.map((item) => (
        <div key={item.name + title} className="menu-item fade-in-section">
          <div className="menu-card-bar" style={{ background: color }}></div>
          <div className="menu-content">
            <h4>{item.name}</h4>
            <p>{item.desc}</p>
            <span className="menu-price">{item.price}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Menu = () => {
  return (
    <section id="menu" className="section" style={{ backgroundColor: '#fcf9f2' }}>
      <div className="section-header fade-in-section">
        <h2 style={{ fontFamily: "'Oregano', cursive" }}>Our Menu</h2>
        <p style={{ fontFamily: "'Reenie Beanie', cursive", fontSize: '2rem', fontStyle: 'normal', letterSpacing: '-1px', wordSpacing: '-4px' }}>
          Sip your favorite brew surrounded by lush green ricefields, where nature and connection meet.
        </p>
      </div>
      <MenuSection title="Hot" color="#b5654a" items={hotItems} />
      <MenuSection title="Iced" color="#5b7f9a" items={icedItems} />
    </section>
  );
};
export default Menu;
