import React from 'react';
import './Blogpage.css';

export default function Blogpage() {
  return (
    <div>
      <div className='blog-section mt-5'>
        <div className='title'>
          <p className='title-matter'>Blog Post</p>
        </div>
        <div className='news'>
          <p className='new_titles'>
            <strong className='news-title'>
              <span className="highlight">La</span>test News & Blog
            </strong>
          </p>
        </div>
      </div>
      <div className='cards d-flex pb_card container mt-5'>
      <div className="burger-card " >
       <div>
       <img src="/assets/images/burger.svg" alt="burger" className="img-burger" />
       </div>
       <div className='container'>
       <div>
        <p className='date '>10 February 2022</p>
       </div>
       <div className='matter '>
        <p><strong>
          Pellentesque Non Efficitur Mi<br></br>
          Aliquam Convallis Mi Quis
          </strong></p>
          </div>
          <div className='d-flex btn '>
          <div className='learn-btn'>
            <p>Learn More</p>
          </div>
          <div>
            <img src="/assets/images/ThumbsUp.svg" alt='like' className='like'/>
            <img src="/assets/images/ChatDots.svg" alt='message' className='message'/>
            <img src="/assets/images/ShareNetwork.svg" alt='send' className='send'/>
          </div>
         </div>
        </div>
     
       
      </div>
      <div className="pizza-card " >
       <div>
       <img src="/assets/images/pizza.svg" alt="burger" className="img-burger" />
       </div>
       <div className='container'>
       <div>
        <p className='date'>10 February 2022</p>
       </div>
       <div className='matter '>
        <p><strong>
          Morbi Sodales Telluse Elit,In<br></br> Blandit Risus Suscipit A
          </strong></p>
          </div>
          <div className='d-flex btn '>
          <div className='learn-btn'>
            <p>Learn More</p>
          </div>
          <div>
            <img src="/assets/images/ThumbsUp.svg" alt='like' className='like'/>
            <img src="/assets/images/ChatDots.svg" alt='message' className='message'/>
            <img src="/assets/images/ShareNetwork.svg" alt='send' className='send'/>
          </div>
         </div>
       </div>
      
       
      </div>
      <div className="masala-card " >
       <div>
       <img src="/assets/images/masala.svg" alt="burger" className="img-burger" />
       </div>
       <div className='container'>
       <div>
        <p className='date '>10 February 2022</p>
       </div>
       <div className='matter '>
        <p className=''><strong>
         Curabitur rutrum velit ac <br></br> congue malesuada
          </strong></p>
          </div>
          <div className='d-flex btn '>
          <div className='learn-btn'>
            <p>Learn More</p>
          </div>
          <div className=''>
            <img src="/assets/images/ThumbsUp.svg" alt='like' className='like'/>
            <img src="/assets/images/ChatDots.svg" alt='message' className='message'/>
            <img src="/assets/images/ShareNetwork.svg" alt='send' className='send'/>
          </div>
         </div>
       </div>
     
       
      </div>
      

      </div>
    </div>

  );
}