import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Filters from './components/Filters';
import ProductsGrid from './components/ProductsGrid';
import Footer from './components/Footer';
import { PRODUCTS_DATABASE } from './data/products';
import './App.css';

function App() {
    const [products] = useState(PRODUCTS_DATABASE);
    const [filteredProducts, setFilteredProducts] = useState(PRODUCTS_DATABASE);
    const [activeFilter, setActiveFilter] = useState('all');
    
    // Filter products when category changes
    useEffect(() => {
        if (activeFilter === 'all') {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(p => p.category === activeFilter));
        }
    }, [activeFilter, products]);
    
    // Filter change handler
    const handleFilterChange = (category) => {
        setActiveFilter(category);
    };
    
    return (
        <div className="app">
            <Header />
            <Hero />
            <Filters activeFilter={activeFilter} onFilterChange={handleFilterChange} />
            <ProductsGrid products={filteredProducts} />
            <Footer />
        </div>
    );
}

export default App;
