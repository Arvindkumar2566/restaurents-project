import React from 'react';
import './Blogpage.css';
import burger from './asets/burger.svg'
import pizza from './asets/pizza.svg'
import masala from './asets/masala.svg'
import like from './asets/ThumbsUp.svg'
import message from './asets/ChatDots.svg'
import send from './asets/ShareNetwork.svg'

export default function Blogpage() {
  return (
    <div>
      <div className='blog-section'>
        <div className='title'>
          <p className='title-matter'>Blog Post</p>
        </div>
        <div className='news'>
          <p>
            <strong className='news-title'>
              <span className="highlight">La</span>test News & Blog
            </strong>
          </p>
        </div>
      </div>
      <div className='cards d-flex container mt-5'>
      <div className="burger-card " >
       <div>
       <img src={burger} alt="burger" className="img-burger" />
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
            <img src={like} alt='like' className='like'/>
            <img src={message} alt='message' className='message'/>
            <img src={send} alt='send' className='send'/>
          </div>
         </div>
        </div>
     
       
      </div>
      <div className="pizza-card " >
       <div>
       <img src={pizza} alt="burger" className="img-burger" />
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
            <img src={like} alt='like' className='like'/>
            <img src={message} alt='message' className='message'/>
            <img src={send} alt='send' className='send'/>
          </div>
         </div>
       </div>
      
       
      </div>
      <div className="masala-card " >
       <div>
       <img src={masala} alt="burger" className="img-burger" />
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
            <img src={like} alt='like' className='like'/>
            <img src={message} alt='message' className='message'/>
            <img src={send} alt='send' className='send'/>
          </div>
         </div>
       </div>
     
       
      </div>
      

      </div>
    </div>

  );
}