import React from 'react';
import './Visit.css';

const Visit = () => {
  return (
    <section id="visit" className="section">
      <div className="visit-container fade-in-section">
        <div className="visit-info">
          <h3 style={{ color: 'black', fontFamily: "'Oregano', cursive" }}>Visit Us</h3>
          <div className="info-block">
            <h5>Location</h5>
            <p>Banjar Dalem Baleran, Desa Pejaten, Kecamatan Kediri<br />Kabupaten Tabanan, Bali<br />Indonesia</p>
          </div>
          <div className="info-block">
            <h5>Opening Hours</h5>
            <p>Monday - Wednesday : 17.00 - 20.00 WITA<br />Thursday : CLOSED<br />Friday - Sunday : 17.00 - 20.00 WITA</p>
          </div>
          <div className="info-block">
            <h5>Contact</h5>
            <p>Instagram : @ves.coff_</p>
          </div>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.264879196918!2d115.11644000000001!3d-8.570509999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23b0042ac18f1%3A0x345883648e4280ae!2sVespa%20Coffee%20Pejaten!5e0!3m2!1sid!2sid!4v1772441682322!5m2!1sid!2sid"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Vespa Coffee Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default Visit;
