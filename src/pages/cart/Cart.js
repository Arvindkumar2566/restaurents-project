import React from 'react';
import CartCount from './Cartcomponents/CartCount';
import './Cart.css';
import Cartheader from './Cartcomponents/Cartheader';

export default function Cart({ cart, setCart }) { 
  console.log(cart);
  return (
    <div>
      <Cartheader />
   
      <CartCount cart={cart} setCart={setCart} />
    </div>
  );
}
