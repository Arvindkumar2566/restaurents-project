import React, { useState } from 'react';
import './Blogcomponentbody.css';

export default function Blogcomponentbody() {
  const [searchQuery, setSearchQuery] = useState('');

 
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };


  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      console.log('Searching for:', searchQuery);
     
    } else {
      console.log('Please enter a search query.');
    }
  };

 

  return (
  <div className="Blogcomponent-section d-flex">
    <div className='whole-section'>
     
        
        <div className="masala-section" >
          <img src="/assets/images/masala-blog.svg" alt="masala-blog" className=" masala-blog" />
          <div className="calender-dates ">
            <img src="/assets/images/blog-dates.svg" alt="blog-dates" className="blog-dates mb-2" />
            <p className="mt-2 ml-2">Feb 14,2022 /</p>
            <img src="/assets/images/chat-product.svg" alt="chats" className="chats ml-2 mb-2" />
            <p className="mt-2 ml-2">3 /</p>
            <img src="/assets/images/contact-logo.svg" alt="contact-logo" className="contact-logo ml-2 mb-2" />
            <p className="mt-2 ml-2">Admin</p>
          </div>
          <div className="reasons-detox">
            <p className="detox-text">10 Reasons to Do A Digital Detox Challenge</p>
          </div>
          <div className="detox-matter">
            <p className="detox-matter-text">
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
              are also reproduced in their exact original form, accompanied by English versions from the
            </p>
          </div>
          <div>
            <button className="readmore-button ">Read More</button>
          </div>
        </div>
         <div className="pizza-large-section" >
         <img src="/assets/images/pizza-large.svg" alt="masala-blog" className="masala-blog" />
         <div className="calender-dates d-flex">
           <img src="/assets/images/blog-dates.svg" alt="blog-dates" className="blog-dates mb-2" />
           <p className="mt-2 ml-2">Feb 14,2022 /</p>
           <img src="/assets/images/chat-product.svg" alt="chats" className="chats ml-2 mb-2" />
           <p className="mt-2 ml-2">3 /</p>
           <img src="/assets/images/contact-logo.svg" alt="contact-logo" className="contact-logo ml-2 mb-2" />
           <p className="mt-2 ml-2">Admin</p>
         </div>
         <div className="reasons-detox">
           <p className="detox-text">Traditional Soft Pretzel with Sweet Beer Cheese</p>
         </div>
         <div className="detox-matter">
           <p className="detox-matter-text">
             The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
             interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
             are also reproduced in their exact original form, accompanied by English versions from the
           </p>
         </div>
         <div>
           <button className="readmore-button">Read More</button>
         </div>
           
        <div className="masala-section" >
          <img src="/assets/images/hole-burger.svg" alt="masala-blog" className="masala-blog" />
          <div className="calender-dates d-flex">
            <img src="/assets/images/blog-dates.svg" alt="blog-dates" className="blog-dates mb-2" />
            <p className="mt-2 ml-2">Feb 14,2022 /</p>
            <img src="/assets/images/chat-product.svg" alt="chats" className="chats ml-2 mb-2" />
            <p className="mt-2 ml-2">3 /</p>
            <img src="/assets/images/contact-logo.svg" alt="contact-logo" className="contact-logo ml-2 mb-2" />
            <p className="mt-2 ml-2">Admin</p>
          </div>
          <div className="reasons-detox">
            <p className="detox-text">The Ultimate Hangover Burger: Egg in a Hole Burger</p>
          </div>
          <div className="detox-matter">
            <p className="detox-matter-text">
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
              are also reproduced in their exact original form, accompanied by English versions from the
            </p>
          </div>
          <div>
            <button className="readmore-button">Read More</button>
          </div>
        </div>
          
        <div className="masala-section" >
          <img src="/assets/images/bread-large.svg" alt="masala-blog" className="masala-blog" />
          <div className="calender-dates d-flex">
            <img src="/assets/images/blog-dates.svg" alt="blog-dates" className="blog-dates mb-2" />
            <p className="mt-2 ml-2">Feb 14,2022 /</p>
            <img src="/assets/images/chat-product.svg" alt="chats" className="chats ml-2 mb-2" />
            <p className="mt-2 ml-2">3 /</p>
            <img src="/assets/images/contact-logo.svg" alt="contact-logo" className="contact-logo ml-2 mb-2" />
            <p className="mt-2 ml-2">Admin</p>
          </div>
          <div className="reasons-detox">
            <p className="detox-text">My Favorite Easy Black Pizza Toast Recipe</p>
          </div>
          <div className="detox-matter">
            <p className="detox-matter-text">
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
              are also reproduced in their exact original form, accompanied by English versions from the
            </p>
          </div>
          <div>
            <button className="readmore-button">Read More</button>
          </div>
          </div>
         
       </div>
    </div>
      <div className='mt-5 search-bar-orange'>
      <div className="search-bar-elements mb-5 d-flex" >
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
          className="search-input"
          
        />
        <img src='/assets/images/search-image.svg' className='search-image' alt='search-image'></img>
      </div>
      <div className='photographer mb-5'>
        <img src='/assets/images/photographer.svg' alt='photographer' className='photographer1 '/>
        <p className='photographer-name'>Prince Miyako</p>
        <p className='job-role'>Blogger  /  Photographer</p>
         <img src='/assets/images/rating-stars.svg' alt='rating-stars' className='stars '/>   (1 Review)
         <p className='mt-3'> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
         interested.</p>
         <img src='/assets/images/insta-icon.svg' alt='fb' className='fb-icon '/>
         <img src='/assets/images/x-icon.svg' alt='fb' className='fb-icon ml-2'/>
         <img src='/assets/images/fb-icon.svg' alt='fb' className='fb-icon ml-2'/>
         <img src='/assets/images/x-icon.svg' alt='fb' className='fb-icon ml-2'/>
      </div> 
      <div className='recent-post-section mb-5'>
        <p className='recent-post-text'>Recent Post</p>
        <div className='recemt-post-images'>
           <div className='gap-3 d-flex'>
              <img src='/assets/images/recent-post1.svg' alt='recent-post' className='recent-post'/>
             <div className="paragraph">
             <p>june 22,2020</p>
             <p>Lorem ipsum dolor sit cing elit,sed do</p>
             </div>
           </div>
           <div  className='gap-3 d-flex'>
              <img src='/assets/images/recent-post2.svg' alt='recent-post' className='recent-post'/>
              <div className="paragraph">
             <p>june 22,2020</p>
             <p>Lorem ipsum dolor sit cing elit,sed do</p>
             </div>
           </div>
           <div   className='gap-3 d-flex'>
              <img src='/assets/images/recent-post3.svg' alt='recent-post' className='recent-post'/>
              <div className="paragraph">
             <p>june 22,2020</p>
             <p>Lorem ipsum dolor sit cing elit,sed do</p>
             </div>
           </div>
           <div  className='gap-3 d-flex'>
              <img src='/assets/images/recent-post4.svg' alt='recent-post' className='recent-post'/>
              <div className="paragraph">
             <p>june 22,2020</p>
             <p>Lorem ipsum dolor sit cing elit,sed do</p>
             </div>
           </div>
        </div>
      </div>
      <div className='filter-section mb-5'>
           <p className='recent-post-text'>Filter By Menu</p>
           <div className='recemt-post-images'>
             <div className='gap-3 d-flex mb-4'>
               <img src='/assets/images/chicken-fry.svg' alt='recent-post' className='fast-food'/>
               <div className="food-container d-flex justify-content-between w-100">
                 <p className='food-name'>Chicken Fry</p>
                 <p className='food-price'>26</p>
               </div>
             </div>
             <div className='gap-3 d-flex mb-4'>
               <img src='/assets/images/vegetables.svg' alt='recent-post' className='fast-food'/>
               <div className="food-container d-flex justify-content-between w-100">
                 <p className='food-name'>Vegetables</p>
                 <p className='food-price'>26</p>
               </div>
             </div>
             <div className='gap-3 d-flex mb-4'>
               <img src='/assets/images/fresh-fruits.svg' alt='recent-post' className='fast-food'/>
               <div className="food-container d-flex justify-content-between w-100">
                 <p className='food-name'>Fresh Fruits</p>
                 <p className='food-price'>26</p>
               </div>
             </div>
             <div className='gap-3 d-flex mb-4'>
               <img src='/assets/images/burger-food.svg' alt='recent-post' className='fast-food'/>
               <div className="food-container d-flex justify-content-between w-100">
                 <p className='food-name'>Burger</p>
                 <p className='food-price'>26</p>
               </div>
             </div>
             <div className='gap-3 d-flex mb-4'>
               <img src='/assets/images/pizz-food.svg' alt='recent-post' className='fast-food'/>
               <div className="food-container d-flex justify-content-between w-100">
                 <p className='food-name'>Pizza</p>
                 <p className='food-price'>26</p>
               </div>
             </div>
           </div>
         </div>
        <div className='papular-tag-section mb-5'>
          <div className='popular-tag-font'>
            <p className='popular-tag-text'>Popular Tags</p>
          </div>
         <div>
         <div className='d-flex  Bbq '>
            <p className='popular-tag-name'>Sandwich</p>
            <p  className='popular-tag-name'>Tikka</p>
            <p className='popular-tag-name'>Bbq</p>
          </div>
          <div className='d-flex  Bbq '>
          
            <p  className='popular-tag-name'>Restaurant</p>
            <p  className='popular-tag-name'>Chicken Sharma</p>
          </div>
          <div className='d-flex  Bbq '>
            <p  className='popular-tag-name'>Health</p>
            <p  className='popular-tag-name'>Fastfood</p>
            <p  className='popular-tag-name'>Food</p>
          </div>
          <div className='d-flex  Bbq '>
            <p  className='popular-tag-name'>Chicken</p>
            <p  className='popular-tag-name'>Burger</p>
            <p  className='popular-tag-name'>Pizza</p>
          </div>
         </div>
        </div>
        <div className='photo-gallery-section mb-5 '>
          <p className='photo-gallery-text'>Photo Gallery</p>
          <div className='photo-gallery-first-row d-flex g-3 '>
               <img src='/assets/images/group1.svg' alt='food-image' className='group1 mb-2  '/>
               <img src='/assets/images/group11.svg' alt='food-image' className='group1 ml-2 mb-2'/>
               <img src='/assets/images/group1.svg' alt='food-image' className='group1 ml-2'/>
          </div>
          <div className='photo-gallery-second-row d-flex g-3'>
          <img src='/assets/images/group21.svg' alt='food-image' className='group1 mb-2'/>
               <img src='/assets/images/group31.svg' alt='food-image' className='group1 ml-2 mb-2'/>
               <img src='/assets/images/group41.svg' alt='food-image' className='group1 ml-2 mb-2'/>

          </div>

        </div>
        <div className='follow-us'>
          <p className='follow-us-text'>Flolow us</p>
      <div className='social-media1-section'>
      <a href=''>
           <img src='/assets/images/follow-fb.svg'alt='fb' className='social-media1'/>
        </a>
        <a href=''>
        <img src='/assets/images/follow-insta.svg'alt='fb' className='social-media1'/>
        </a>
        <a href=''>
        <img src='/assets/images/follow-youtube.svg'alt='fb' className='social-media1'/>
        </a>
        
        <a href=''>
        <img src='/assets/images/follow-twitter.svg'alt='fb' className='social-media1'/>
        </a>
      </div>
        </div>
      </div>
    </div>
  );
}
