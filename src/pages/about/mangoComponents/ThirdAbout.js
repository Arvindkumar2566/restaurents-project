import React from 'react'
import'./ThirdAbout.css'
const ThirdAbout = () => {
  return (
  <div className='d-flex mx-5 px-5 mt-5 third_about'>
      <div className=' d-block text-center col-sm-4 '>
        <img src='/assets/images/Student.png' alt='bwstudent'></img>
        <p className='fw-bolder fs-4' >Best Chef</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
    </div>
    <div className=' d-block text-center col-sm-4 '>
        <img src='/assets/images/bwCoffee.png' alt='bwcoffee'></img>
        <p className='fw-bolder fs-4' >Best Chef</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
    </div>
    <div className=' d-block text-center col-sm-4 '>
        <img src='/assets/images/Person.png' alt='bwsperson'></img>
        <p className='fw-bolder fs-4' >Best Chef</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
    </div>
  </div>
  )
}

export default ThirdAbout