import React from 'react';
import './Header.css';

function Header({ cartCount, onCartClick }) {
    return (
        <header className="header">
            <div className="nav-container">
                <div className="logo">
                    OUTLAW
                    <span className="logo-subtitle">STREETWEAR EMPIRE</span>
                </div>
                <nav>
                    <ul className="nav-menu">
                        <li><button className="nav-link">New Drops</button></li>
                        <li><button className="nav-link">Collections</button></li>
                        <li><button className="nav-link">About</button></li>
                        <li>
                            <button className="cart-icon nav-link" onClick={onCartClick}>
                                🛒 Cart ({cartCount})
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
