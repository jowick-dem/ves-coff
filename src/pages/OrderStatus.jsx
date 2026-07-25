import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Clock } from 'lucide-react';
import './OrderStatus.css';

const OrderStatus = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);

    const orderData = location.state;

    useEffect(() => {
        if (!orderData) {
            navigate('/');
            return;
        }

        // Simulate order progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 150); // Fast forward for demo purposes

        return () => clearInterval(interval);
    }, [orderData, navigate]);

    if (!orderData) return null;

    return (
        <div className="order-status-page">
            <div className="status-container">
                <div className="status-icon-wrapper">
                    <CheckCircle size={64} className="status-icon success" />
                </div>

                <h1>Order Confirmed, {orderData.name}!</h1>
                <p className="order-number">Order #{orderData.orderNumber}</p>

                <div className="status-card">
                    <div className="status-header">
                        <Clock size={24} className="text-accent" />
                        <div className="status-info">
                            <h3>Estimated Pickup Time</h3>
                            <p>{orderData.pickupTime === 'asap' ? '15 - 20 Minutes' : 'View selected time'}</p>
                        </div>
                    </div>

                    <div className="progress-section">
                        <div className="progress-labels">
                            <span>Received</span>
                            <span>Preparing</span>
                            <span>Ready</span>
                        </div>
                        <div className="progress-bar-bg">
                            <div
                                className="progress-bar-fill"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <p className="progress-text">
                            {progress < 30 && 'Barista has received your order...'}
                            {progress >= 30 && progress < 90 && 'Carefully crafting your coffee...'}
                            {progress >= 90 && progress < 100 && 'Final touches...'}
                            {progress === 100 && 'Ready for pickup!'}
                        </p>
                    </div>
                </div>

                <button className="btn btn-outline mt-8" onClick={() => navigate('/')}>
                    Return to Home
                </button>
            </div>
        </div>
    );
};

export default OrderStatus;
