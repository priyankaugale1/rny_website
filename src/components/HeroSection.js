import React from 'react';
import '../styles/HeroSection.css';
import profileImage from '../assets/profileImage.svg';
import portfolioImage from '../assets/protfolioImage.svg';
import silsila from '../assets/silsila.svg';
import wave from '../assets/wave.svg';
import doradesign from '../assets/doradesign.svg';
const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-heading">
                <h1>
                    I AM A
                    <span className="circle-image">
                        <img src={profileImage} alt="profile" />
                    </span>
                    FREELANCE
                </h1>
                <h1>
                    DESIGNER
                    <span className="circle-image">
                        <img src={portfolioImage} alt="portfolio" />
                    </span>
                    FROM
                </h1>
                <h1>SAN FRANCISCO</h1>
            </div>

            <div className="portfolio-container">
                <div className="portfolio-content">
                    <div className="portfolio-logos">
                        <img src={doradesign} alt="silila" className="logo-image" />
                        <img src={wave} alt="wave" className="logo-image" />
                        <img src={silsila} alt="silila" className="logo-image" />
                    </div>
                    <div className="portfolio-text">
                        Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase of distinctive branding and web designs, each crafted to captivate and inspire.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
