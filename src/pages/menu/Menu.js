import React from 'react';
import './Menu.css';
import OurMenu from './Menucomponents/OurMenu';
import MainCourse from './Menucomponents/MainCourse';
import Dessert from './Menucomponents/Dessert';
import Starter from './Menucomponents/Starter';

function Menu() {
  return (
    <div className='bg-white'>
      <OurMenu />
      <Starter />
      <MainCourse />
      <Dessert />
      <MainCourse />
    </div>
  );
}

export default Menu;
