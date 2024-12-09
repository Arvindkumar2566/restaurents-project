import React from 'react';
import FilterSidebar from './FilterSidebar';
import ProductGrid from './ProductGrid';
import './ProductPage.css';

const ProductPage = () => {
  return (
    <div className="product-page">
      <FilterSidebar />
      <ProductGrid />
    </div>
  );
};

export default ProductPage;
