import React from 'react';
import './Page.css';
import Shoppingcart from '../ShoppingCart/Shoppingcart';

function Page() {
  return (
    <div className="page">
      <h1>Extra Pages</h1>
      <p>Additional content for you to explore.</p>
      <Shoppingcart/>
    </div>
  );
}

export default Page;
