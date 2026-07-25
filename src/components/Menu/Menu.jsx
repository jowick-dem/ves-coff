import React from 'react';
import './Menu.css';
import { menuItems } from '../../data/menu';

const Menu = () => {
    return (
        <section className="menu section" id="menu">
            <div className="container">
                <h2 className="section-title">Signature <span>Brews</span></h2>

                <div className="menu-grid">
                    {menuItems.map(item => (
                        <div className="menu-card" key={item.id}>
                            <div className="menu-img-container">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="menu-img" 
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80';
                                    }} 
                                />
                                <div className="menu-price-tag">{item.price}</div>
                            </div>
                            <div className="menu-info">
                                <h3 className="menu-item-title">{item.name}</h3>
                                <p className="menu-item-desc">{item.description}</p>
                                <button className="btn btn-outline" style={{ width: '100%', marginTop: '1rem' }}>
                                    Add to Order
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;
