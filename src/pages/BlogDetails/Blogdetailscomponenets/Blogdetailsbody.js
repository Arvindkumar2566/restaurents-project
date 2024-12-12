import React,{useState}from 'react'
import './Blogdetailsbody.css'

const Blogdetailsbody = () => {
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
    
      <div className='blogdetails-section d-flex'>
        <div className="masala1-section" >
          <img src="/assets/images/chicken-piece.svg" alt="masala-blog" className="masala-blog1" />
          <div className="calender-dates d-flex">
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
            <p className="detox-matter-text">
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
              are also reproduced in their exact original form, accompanied by English versions from the
            </p>
          </div>
          <div className='important-note d-flex'>
          <span><img src='/assets/images/quote.svg' alt='quote' className='quote text-white'/></span>
          <p className="imoprtant-matter">
           
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
              are also reproduced in their exact original form, accompanied by English versions from the
            </p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <div className='chicken-soop-section d-flex'>
             <div>
             <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
             </div>
             <div>
              <img src='/assets/images/chicken-soop.svg'alt='chicken-soop'className='chicken-soop'/>
             </div>
            </div>
            <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
            <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
            <div className='tags  d-flex justify-content-between'>
              <div >
              <p><span className='tag-text'>Tags:</span>   Restaurant,  Dinner, Pizza, Yummy</p>
              </div>
              <div>
              <span className='tag-text'>Tags:</span>
              <img src='' className='icons1'/>
              <img src='/assets/images/x.svg' className='icons1'/>
              <img src='/assets/images/youtube.svg 'className='icons1'/>
              <img src='/assets/images/followp.svg'className='icons1'/>
              </div>
            </div>
            
          </div>
          <div className='comment-section'>
            <p  className='comment-text'> Comment-03</p>
            <div className='d-flex  md-section mt-4'>
            <div>
              <img src='/assets/images/md1.svg'/>
            </div>
            <div>
            <div className='d-flex'>
            <p className='md-name'><strong>MD Sojib Khan</strong> </p>
            <img src='/assets/images/Reply.svg' className='reply'/>
            </div>
              <img src='/assets/images/Calender.svg'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin.</p>
            </div>
            </div>
            <div>
            </div>
          </div>
          <div className='d-flex  md2-section mt-4'>
            <div>
              <img src='/assets/images/md2.svg'/>
            </div>
            <div>
            <div className='d-flex g-2'>
            <p className='md-name'><strong>MD Sojib Khan</strong> </p>
            <img src='/assets/images/Reply.svg' className='reply'/>
            </div>
              <img src='/assets/images/Calender.svg'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin.</p>
            </div>
            </div>
            <div>
            </div>
            <div className='d-flex  md-section mt-4'>
            <div>
              <img src='/assets/images/md3.svg'/>
            </div>
            <div>
            <div className='d-flex g-2'>
            <p className='md-name'> <strong>MD Sojib Khan</strong> </p>
            <img src='/assets/images/Reply.svg' className='reply'/>
            </div>
              <img src='/assets/images/Calender.svg'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin.</p>
            </div>
            </div>
            <div>
            </div>
            <div className='post-comments'>
              <p className='post-comment-text'>Post a comment</p>
                <input type='text' className='commenter-name ' placeholder='Name*'/>
                <input type='email' className='commenter-email' placeholder='Email*'/>
                <input type='text-area' className='text-area' placeholder='Write somthing'/>
                <button className='post-comment'>Post aComment</button>
            </div>
          </div>
          <div className='mt-5 search-bar-orange '>
      <div className="search-bar-elements mb-5" >
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
          className="search-input1"
          
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
        <p className='recent-post-text '>Recent Post</p>
        <div className='recemt-post-images'>
           <div className='gap-3 d-flex recent-post-elements'>
              <img src='/assets/images/recent-post1.svg' alt='recent-post' className='recent-post'/>
             <div className="paragraph">
             <p>june 22,2020</p>
             <p>Lorem ipsum dolor sit cing elit,sed do</p>
             </div>
           </div>
           <div  className='gap-3 d-flex recent-post-elements'>
              <img src='/assets/images/recent-post2.svg' alt='recent-post' className='recent-post'/>
              <div className="paragraph">
             <p>june 22,2020</p>
             <p>Lorem ipsum dolor sit cing elit,sed do</p>
             </div>
           </div>
           <div   className='gap-3 d-flex recent-post-elements'>
              <img src='/assets/images/recent-post3.svg' alt='recent-post' className='recent-post'/>
              <div className="paragraph">
             <p>june 22,2020</p>
             <p>Lorem ipsum dolor sit cing elit,sed do</p>
             </div>
           </div>
           <div  className='gap-3 d-flex recent-post-elements'>
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
             <div className='gap-2 d-flex mb-4'>
               <img src='/assets/images/vegetables.svg' alt='recent-post' className='fast-food'/>
               <div className="food-container d-flex justify-content-between w-100">
                 <p className='food-name'>Vegetables</p>
                 <p className='food-price'>26</p>
               </div>
             </div>
             <div className='gap-2 d-flex mb-4'>
               <img src='/assets/images/fresh-fruits.svg' alt='recent-post' className='fast-food'/>
               <div className="food-container d-flex justify-content-between w-100">
                 <p className='food-name'>Fresh Fruits</p>
                 <p className='food-price'>26</p>
               </div>
             </div>
             <div className='gap-2 d-flex mb-4'>
               <img src='/assets/images/burger-food.svg' alt='recent-post' className='fast-food'/>
               <div className="food-container d-flex justify-content-between w-100">
                 <p className='food-name'>Burger</p>
                 <p className='food-price'>26</p>
               </div>
             </div>
             <div className='gap-2 d-flex mb-4'>
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
         <div className='d-flex Bbq '>
            <p className='popular-tag-name'>Sandwich</p>
            <p  className='popular-tag-name'>Tikka</p>
            <p className='popular-tag-name'>Bbq</p>
          </div>
          <div className='d-flex Bbq'>
          
            <p  className='popular-tag-name'>Restaurant</p>
            <p  className='popular-tag-name'>Chicken Sharma</p>
          </div>
          <div className='d-flex Bbq'>
            <p  className='popular-tag-name'>Health</p>
            <p  className='popular-tag-name'>Fastfood</p>
            <p  className='popular-tag-name'>Food</p>
          </div>
          <div className='d-flex  Bbq'>
            <p  className='popular-tag-name'>Chicken</p>
            <p  className='popular-tag-name'>Burger</p>
            <p  className='popular-tag-name'>Pizza</p>
          </div>
         </div>
        </div>
        <div className='photo-gallery-section mb-5 '>
          <p className='photo-gallery-text'>Photo Gallery</p>
          <div className='photo-gallery-first-row d-flex g-3 '>
               <img src='/assets/images/group1.svg' alt='food-image' className='group1 mb-2'/>
               <img src='/assets/images/group11.svg' alt='food-image' className='group1 ml-2 mb-2'/>
               <img src='/assets/images/group1.svg' alt='food-image' className='group1 ml-2 mb-2'/>
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
      <a href='#'>
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
      
   
  )
}

export default Blogdetailsbody