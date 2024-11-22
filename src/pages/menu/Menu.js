import React from 'react';
import './Menu.css';
import OurMenu from './Menucomponents/OurMenu';
import Starter from './Menucomponents/Starter';
import Dessert from './Menucomponents/Dessert';

function Menu() {
  return (
    <div>

      <OurMenu/>
      <Starter/>
      <Dessert/>
      
    </div>
  );
}

export default Menu;
