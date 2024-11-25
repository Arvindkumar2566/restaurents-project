import React from 'react';
import './Shop.css';
import CardDetails from './shopComponents/CardDetails';
import Ourshopheader from './shopComponents/Ourshopheader';


function Shop() {
  return (
    <div>
      <Ourshopheader/>
      <CardDetails/>
    </div>
  );
}

export default Shop;
