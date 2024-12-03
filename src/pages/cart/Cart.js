import React from 'react';
import CartCount from './Cartcomponents/CartCount';
import './Cart.css';
import Cartheader from './Cartcomponents/Cartheader';

export default function Cart() {
  return (
    <div>
    
      <Cartheader />
      <CartCount />
    </div>
  );
}