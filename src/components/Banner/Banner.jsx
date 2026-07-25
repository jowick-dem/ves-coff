import React from 'react';
import './Banner.css';
import bgImg from '../../assets/banner_bg.png';
import espressoImg from '../../assets/espresso_shot.png';
import latteImg from '../../assets/latte_cup.png';

const Banner = () => {
    return (
        <section className="banner" id="home">
            <div
                className="banner-background"
                style={{ backgroundImage: `url(${bgImg})` }}
            >
                <div className="banner-overlay"></div>
            </div>

            <div className="container banner-content-wrapper">
                <div className="banner-text-content">
                    <h1 className="banner-title">
                        Awaken Your Senses with <span>Perfect Brews</span>
                    </h1>
                    <p className="banner-subtitle">
                        Experience the finest artisanal coffee, ethically sourced and masterfully roasted to bring out the subtle notes hiding in every bean.
                    </p>
                    <div className="banner-buttons">
                        <button className="btn btn-primary">Our Menu</button>
                        <button className="btn btn-outline banner-outline-btn">
                            Book a Table
                        </button>
                    </div>
                </div>
                
                <div className="banner-visuals">
                    <div className="image-card top-image">
                        <img src={latteImg} alt="Latte Art" />
                    </div>
                    <div className="image-card bottom-image">
                        <img src={espressoImg} alt="Espresso Shot" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
