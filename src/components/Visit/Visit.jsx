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
            src="https://www.openstreetmap.org/export/embed.html?bbox=115.114%2C-8.572%2C115.119%2C-8.569&layer=mapnik&marker=-8.57051%2C115.11644"
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
