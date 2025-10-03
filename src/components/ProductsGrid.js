import React from 'react';
import ProductCard from './ProductCard';
import './ProductsGrid.css';

function ProductsGrid({ products }) {
    return (
        <div className="products-container">
            <div className="products-grid">
                {products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductsGrid;
