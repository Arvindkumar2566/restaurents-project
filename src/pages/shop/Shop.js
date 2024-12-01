import React from 'react';
import './Shop.css';
import CardDetails from './shopComponents/CardDetails';
import Ourshopheader from './shopComponents/Ourshopheader';
import ProductDescription from './shopComponents/ProductDescription';

function Shop() {
  return (
    <div>
      <Ourshopheader />
      <CardDetails />
      <ProductDescription/>
    </div>
  );
}

export default Shop;
