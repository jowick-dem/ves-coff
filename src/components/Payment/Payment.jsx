import React from 'react';
import './Payment.css';

const base = import.meta.env.BASE_URL;

const Payment = () => {
  return (
    <section id="payment" className="section">
      <div className="payment-wrap fade-in-section">
        <div className="payment-card">
          <img src={`${base}qris.png`} alt="QRIS Vespa Coffee" className="qris-full-img" />
        </div>

        <div className="payment-info">
          <h3 style={{ fontFamily: "'Oregano', cursive", color: 'var(--accent-color)' }}>Cashless Payment</h3>
          <p>
            Scan the QR code with any QRIS-enabled app (GoPay, OVO, Dana, ShopeePay, LinkAja,
            or your mobile banking app) to pay seamlessly.
          </p>
          <div className="payment-steps">
            <div className="step">
              <span className="step-icon">1</span>
              <span>Open your QRIS payment app</span>
            </div>
            <div className="step">
              <span className="step-icon">2</span>
              <span>Scan the QR code above</span>
            </div>
            <div className="step">
              <span className="step-icon">3</span>
              <span>Confirm and pay</span>
            </div>
          </div>
          <p className="payment-note">
            Vespa Coffee · NMID: ID1025451356535 · Satu QRIS Untuk Semua
          </p>
        </div>
      </div>
    </section>
  );
};
export default Payment;
