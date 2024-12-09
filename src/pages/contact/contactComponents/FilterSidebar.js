import React from 'react';
import './FilterSidebar.css';

const FilterSidebar = () => {
  return (
    <div className="filter-sidebar">
      <h3>Filter By Category</h3>
      <ul>
        <li><input type="checkbox" /> Sandwiches</li>
        <li><input type="checkbox" /> Burgers</li>
        <li><input type="checkbox" /> Drinks</li>
        <li><input type="checkbox" /> Pizza</li>
      </ul>
      <h3>Filter By Price</h3>
      <div>
        <input type="range" min="10" max="500" />
        <p>Price Range: $10 - $500</p>
      </div>
    </div>
  );
};

export default FilterSidebar;
