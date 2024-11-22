import React from 'react';
import './Menu.css';
import OurMenu from './Menucomponents/OurMenu';
import MainCourse from './Menucomponents/MainCourse';

function Menu() {
  return (
    <div className='bg-white'>
      
      <OurMenu/>
      <MainCourse/>
    </div>
  );
}

export default Menu;
