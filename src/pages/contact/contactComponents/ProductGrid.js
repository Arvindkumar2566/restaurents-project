import React from 'react';
import ProductItem from './ProductItem';
import './ProductGrid.css';

const ProductGrid = () => {
  const products = [
    { id: 1, name: 'Fresh Lime', price: 35, image: '/assets/images/fresh_lime.jpg' },
    { id: 2, name: 'Burger', price: 21, image: '/assets/images/burger.jpg' },
    { id: 3, name: 'Pizza', price: 41, image: '/assets/images/pizza.jpg' },
    { id: 4, name: 'Chicken Chop', price: 32, image: '/assets/images/chicken_chop.jpg' },
  ];

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
