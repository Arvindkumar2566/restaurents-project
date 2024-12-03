import React from 'react';
import './Shop.css';
import CardDetails from './shopComponents/CardDetails';
import Ourshopheader from './shopComponents/Ourshopheader';
import ProductDescription from './shopComponents/ProductDescription';

function Shop({cart,CartHandler}) {
  return (
    <div>
      <Ourshopheader />
      <CardDetails CartHandler={CartHandler} />
      <ProductDescription/>
    </div>
  );
}

export default Shop;
