import React from 'react';
import './Menu.css';
import OurMenu from './Menucomponents/OurMenu';
import MainCourse from './Menucomponents/MainCourse';
import Starter from './Menucomponents/Starter';
import Dessert from './Menucomponents/Dessert';
import Statistics from '../home/homeCompnents/Statistics';
function Menu() {
  return (
    <div className='bg-white'>
      <OurMenu/>
      <Starter/>
      <MainCourse/>
      <Statistics/>
      <Dessert/>
      <MainCourse/>
    </div>
  );
}

export default Menu;
