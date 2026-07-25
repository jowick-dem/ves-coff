import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { menuItems } from '../data/menu';
import { Plus } from 'lucide-react';
import './FullMenu.css';

const FullMenu = () => {
    const { addToCart } = useContext(CartContext);
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', ...new Set(menuItems.map(item => item.category))];

    const filteredItems = activeCategory === 'All'
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <div className="full-menu-page">
            <div className="menu-header-section">
                <h1>Our Menu</h1>
                <p>Discover our carefully crafted beverages and freshly baked treats.</p>

                <div className="category-filters">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="menu-grid container">
                {filteredItems.map(item => (
                    <div key={item.id} className="menu-card full-menu-card">
                        <div className="menu-card-img-wrapper">
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="menu-card-img" 
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80';
                                }} 
                            />
                            <button
                                className="add-to-cart-quick"
                                onClick={() => addToCart(item)}
                                title={`Add ${item.name} to cart`}
                            >
                                <Plus size={20} />
                            </button>
                        </div>
                        <div className="menu-card-content">
                            <div className="menu-card-header">
                                <h3 className="menu-card-title">{item.name}</h3>
                                <span className="menu-card-price">${item.price.toFixed(2)}</span>
                            </div>
                            <p className="menu-card-desc">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FullMenu;
