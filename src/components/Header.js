import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="nav-container">
                <div className="logo-container">
                    <img src="/outlawed2.png" alt="Outlawed Logo" className="logo-image" />
                    <div className="logo">
                        OUTLAWED
                        <span className="logo-subtitle">STREETWEAR EMPIRE</span>
                    </div>
                </div>
                
                <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={isMenuOpen ? 'active' : ''}></span>
                    <span className={isMenuOpen ? 'active' : ''}></span>
                    <span className={isMenuOpen ? 'active' : ''}></span>
                </button>
                
                <nav className={isMenuOpen ? 'nav-open' : ''}>
                    <ul className="nav-menu">
                        <li><button className="nav-link" onClick={toggleMenu}>About</button></li>
                        <li><button className="nav-link" onClick={toggleMenu}>Contact</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
