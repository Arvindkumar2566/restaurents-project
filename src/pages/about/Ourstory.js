import React from 'react';
import './Ourstory.css';
import AboutSecOne from './mangoComponents/AboutSecOne';
import SecondAbout from './mangoComponents/SecondAbout';
import ThirdAbout from './mangoComponents/ThirdAbout';
import FourthAbout from './mangoComponents/FourthAbout';
import Ourclientsaying from '../home/homeCompnents/Ourclientsaying';
import FifthAbout from './mangoComponents/FifthAbout';
function Ourstory() {
  return (
    <div className='bg-white text-dark '>
      <AboutSecOne/>
      <SecondAbout/>
      <ThirdAbout/>
      <FourthAbout/>
      <Ourclientsaying/>
     <FifthAbout/>
    </div>
  );
}

export default Ourstory;
