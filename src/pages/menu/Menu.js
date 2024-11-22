import React from 'react';
import './Menu.css';
import OurMenu from './Menucomponents/OurMenu';
import Starter from './Menucomponents/Starter';

function Menu() {
  return (
    <div>
      <h1>Menu Page</h1>
      <p>This is the Menu page content.</p>
      <OurMenu/>
      <Starter/>
      
    </div>
  );
}

export default Menu;
