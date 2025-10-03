import React from 'react';
import './Filters.css';

function Filters({ activeFilter, onFilterChange }) {
    const categories = ['all', 'hoodies', 'tees', 'jackets', 'pants'];
    
    return (
        <div className="filters">
            {categories.map(category => (
                <button
                    key={category}
                    className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                    onClick={() => onFilterChange(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default Filters;
