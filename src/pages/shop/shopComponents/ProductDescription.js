import React from 'react'
import './ProductDescription.css'

export default function ProductDescription() {
  return (
    <div className='product-description-section '>
        <div className='description-btn'>
            <button className='description-element'><a href='#'>Description</a></button>
            <button className='reviews-text'><a href='#'>Reviews (24)</a></button>
        </div>
        <div className='description-matter'>
            <p className='description-text text-dark'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sunt magni deserunt quaerat, beatae unde odio eaque harum consequuntur esse dolor! Id vitae corrupti, possimus incidunt officia perspiciatis! Veniam, accusamus!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, rerum tenetur? Vero accusamus dolore quasi voluptate quae, aperiam eum corporis corrupti, debitis inventore ratione minus ab, eos dignissimos quam incidunt!</p>
        </div>
        <div className='description-matter'>
            <p className='description-text text-dark'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sunt magni deserunt quaerat, beatae unde odio eaque harum consequuntur esse dolor! Id vitae corrupti, possimus incidunt officia perspiciatis! Veniam, accusamus!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, rerum tenetur? Vero accusamus dolore quasi voluptate quae, aperiam eum corporis corrupti, debitis inventore ratione minus ab, eos dignissimos quam incidunt!</p>
        </div>
        <div className='key-benifit'>
            <p className='key-benifit-text'>Key Benifits</p>
            <ul className='key-points'>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                <li>Quidem sunt magni deserunt quaerat, beatae unde odio eaque harum consequuntur esse dolor!</li>
                <li> Quidem sunt magni deserunt quaerat, beatae unde odio eaque harum consequuntur esse dolor!</li>
                <li>Vero accusamus dolore quasi voluptate quae, aperiam eum corporis corrupti</li>
                <li>consectetur adipisicing elit. Quidem sunt magni deserunt quaerat</li>
            </ul>
        </div>
        <div className='similar-product '>
            <p className='similar-product-text'> Similar Product</p>
            <div className='d-flex col-sm-10 similar-products'>
            <div>
                <img src='/assets/images/plates-spoon.svg' alt='vegetable' className='vegetable-product'/>
                <p className='similar-product-names'>Fresh lime</p>
                <p className='similar-product-cost '>$38.00   <span className='original-cost text-dark'>$48.00</span></p>
            </div>
                <div>
                <img src='/assets/images/dessert-product.svg' alt='vegetable' className='vegetable-product'/>
                <p className='similar-product-names'>Chocolate Muffin</p>
                <p className='similar-product-cost '>$38.00  <span className='original-cost text-dark'>$48.00</span></p> 
                </div>
               <div>
               <img src='/assets/images/burger-product.svg' alt='vegetable' className='vegetable-product'/>
               <p className='similar-product-names'>Burger</p>
               <p className='similar-product-cost '>&38.00   <span className='original-cost text-dark'>$48.00</span></p>
               </div>
               <div>
               <img src='/assets/images/plates-spoon.svg' alt='vegetable' className='vegetable-product'/>
               <p className='similar-product-names'>Fresh lime</p>
               <p className='similar-product-cost '>$38.00  <span className='original-cost text-dark'>$48.00</span></p> 
               </div>
            </div>
        </div>
    </div>
  )
}
