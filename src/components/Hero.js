import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <img src="/outlawed.png" alt="Outlawed" className="hero-logo" />
                <h1>RULE THE STREETS</h1>
                <p>Premium streetwear for the fearless</p>
                <button className="cta-button">Shop Collection</button>
            </div>
        </section>
    );
}

export default Hero;
