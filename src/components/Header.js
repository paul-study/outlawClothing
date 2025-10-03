import React from 'react';
import './Header.css';

function Header() {
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
                <nav>
                    <ul className="nav-menu">
                        <li><button className="nav-link">New Drops</button></li>
                        <li><button className="nav-link">Collections</button></li>
                        <li><button className="nav-link">About</button></li>
                        <li><button className="nav-link">Contact</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
