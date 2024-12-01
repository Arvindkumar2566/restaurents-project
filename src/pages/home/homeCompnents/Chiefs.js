import React from 'react'
import './Chief.css'

export default function Chiefs() {
  return (
    <div className='chief-card-section'>
        <div className='chief-font'>
            <p className='chief-text'>chef</p>
            <p className='meet-our-chief'><span> Me</span>at our Chef</p>
        </div>
        <div className='chief-card container d-flex'>
       <img src='/assets/images/card1.svg' alt='card1' className='chief-card2'/>
       <img src='/assets/images/card2.svg' alt='card1' className='chief-card1'/>
       <img src='/assets/images/card3.svg' alt='card1' className='chief-card1'/>
       <img src='/assets/images/card4.svg' alt='card1' className='chief-card1'/>
       </div>
       <div className='see-more-button-container'>
      <a href="/your-link-here" className='see-btn'>See More</a>
    </div>
    </div>
  )
}
