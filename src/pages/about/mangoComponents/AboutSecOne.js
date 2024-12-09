import React from 'react'
import { Link } from 'react-router-dom';
import './AboutSecOne.css'
const AboutSecOne = () => {
  return (
    <div className='d-flex container aboutSecOne pt-5 '>
        <div className='col-sm-6'>
        <img className='w-75 ms-5' src='/assets/images/about_img1.png' alt='first_img'></img>
        </div>
        <div className='cos-sm-6 text-start me-5'>
           <p className='gold m-0'>About us  __</p> 
           <p className='gold_1d'>Food is an important part Of a balanced Diet</p>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
           <Link to='/about'>
                <button className='btn btn-warning'>Show more</button>
           </Link>
           
           <button className='btn btn-warning mx-2 rounded'><img src='/assets/images/about_img2 video.png' alt='video'></img></button>
           <span><strong>watch video</strong></span>
        </div>
    </div>
  )
}

export default AboutSecOne