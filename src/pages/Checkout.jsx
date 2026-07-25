import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, CreditCard, ArrowRight } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import toast from 'react-hot-toast';
import './Checkout.css';

const Checkout = () => {
    const { cartItems, cartTotal, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        pickupTime: 'asap'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cartItems.length === 0) {
            toast.error('Your cart is empty!');
            return;
        }

        // Simulate order processing
        toast.success('Processing your order...');
        setTimeout(() => {
            clearCart();
            const orderNumber = Math.floor(100000 + Math.random() * 900000);
            navigate('/order-status', { state: { orderNumber, ...formData } });
        }, 1500);
    };

    if (cartItems.length === 0) {
        return (
            <div className="checkout-empty">
                <ShoppingBag size={64} className="mb-4 text-gray-400" />
                <h2>Your cart is empty.</h2>
                <p>Looks like you haven't added anything to your cart yet.</p>
                <button className="btn btn-primary mt-4" onClick={() => navigate('/menu')}>
                    Browse Menu
                </button>
            </div>
        );
    }

    return (
        <div className="checkout-page container">
            <h1>Complete Your Order</h1>

            <div className="checkout-grid">
                <div className="checkout-form-section">
                    <form className="checkout-form" onSubmit={handleSubmit}>
                        <h3>Contact Details</h3>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} />
                            </div>
                        </div>

                        <h3>Pickup Details</h3>
                        <div className="form-group">
                            <label htmlFor="pickupTime">Preferred Pickup Time</label>
                            <select id="pickupTime" name="pickupTime" value={formData.pickupTime} onChange={handleChange}>
                                <option value="asap">As Soon As Possible (15-20 mins)</option>
                                <option value="30min">In 30 Minutes</option>
                                <option value="1hour">In 1 Hour</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-primary submit-order-btn">
                            <CreditCard size={20} />
                            Place Order (${cartTotal().toFixed(2)})
                        </button>
                    </form>
                </div>

                <div className="checkout-summary-section">
                    <h3>Order Summary</h3>
                    <div className="summary-items">
                        {cartItems.map(item => (
                            <div key={item.id} className="summary-item">
                                <div className="summary-item-info">
                                    <span className="summary-item-qty">{item.quantity}x</span>
                                    <span className="summary-item-name">{item.name}</span>
                                </div>
                                <span className="summary-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>

                    <div className="summary-totals">
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>${cartTotal().toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Tax (8%)</span>
                            <span>${(cartTotal() * 0.08).toFixed(2)}</span>
                        </div>
                        <div className="summary-row total-row">
                            <span>Total</span>
                            <span>${(cartTotal() * 1.08).toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
