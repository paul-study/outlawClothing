import React from 'react';
import './CartModal.css';

function CartModal({ isOpen, onClose, cartItems, onRemoveItem }) {
    if (!isOpen) return null;
    
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    
    return (
        <div className="cart-modal" onClick={onClose}>
            <div className="cart-content" onClick={(e) => e.stopPropagation()}>
                <div className="cart-header">
                    <h2>Your Cart</h2>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>
                
                {cartItems.length === 0 ? (
                    <div className="empty-cart">
                        <p>Your cart is empty. Start shopping!</p>
                    </div>
                ) : (
                    <>
                        <div className="cart-items">
                            {cartItems.map((item, index) => (
                                <div key={index} className="cart-item">
                                    <img src={item.image} alt={item.name} className="cart-item-image" />
                                    <div className="cart-item-details">
                                        <div className="cart-item-name">{item.name}</div>
                                        <div className="cart-item-price">${item.price}</div>
                                    </div>
                                    <button 
                                        className="remove-btn"
                                        onClick={() => onRemoveItem(index)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                        
                        <div className="cart-total">
                            <span>Total:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        
                        <button className="checkout-btn">Checkout</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default CartModal;
