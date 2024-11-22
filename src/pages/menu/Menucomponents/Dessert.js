import React from 'react'
import './Dessert.css'

export default function Dessert() {
  return (
    <div className="starter-menu-container">
    <div className="image-containe">
      <img
        src="/assets/images/dessert.svg" 
        alt="Food"
        className="dessert-image"
      />
    </div>
    <div className="dessert-element container">
      <img src='/assets/images/coffee.svg' alt='coffee'/>
      <p className='dessert-text'>Dessert</p>
      <div className="dessert-item">
        <div className="dessert-details">
          <p className='fig-text'>Fig and lemon cake</p>
          <p className='desserts-description'>Toasted French bread topped with romano, cheddar
          <br/>560 CAL</p>
        </div>
        <div className="dessert-price">32$</div>
      </div>
      <div className="dessert-item">
        <div className="dessert-details">
          <p className='creamy-text'>Berries and creme tart</p>
          <p className='items-description'>Gorgonzola, ricotta, mozzarella, taleggio
          <br/>700 CAL</p>
        </div>
        <div className="dessert-price">43$</div>
      </div>
      <div className="dessert-item">
        <div className="dessert-details">
          <p className='pastry-text'>Pastry,blueberries,lemon juice</p>
          <p className='items-description'>Ground cumin, avocados, peeled and cubed
          <br/>1000 CAL</p>
        </div>
        <div className="dessert-price">14$</div>
      </div>
      <div className="dessert-item">
        <div className="dessert-details">
          <p className='pain-text'>Pain au chocolat</p>
          <p className='items-description'>Spreadable cream cheese, crumbled blue cheese
          <br/>560 CAL</p>
        </div>
        <div className="dessert-price">35$</div>
      </div>
    </div>
  </div>
  )
}
