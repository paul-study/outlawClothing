import React from 'react';
import ProductCard from './ProductCard';
import './ProductsGrid.css';

function ProductsGrid({ products, onAddToCart }) {
    return (
        <div className="products-container">
            <div className="products-grid">
                {products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductsGrid;
