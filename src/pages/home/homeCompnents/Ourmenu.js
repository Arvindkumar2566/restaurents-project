import React from 'react'
import './Ourmenu.css'

export default function Ourmenu() {
  return (
    <div className='ourmenu-section container mt-5'>
        <div className='choose-fonts text-center'>
            <p className='choose-text'>Choose & pic</p>
            <p className='from-menu'><span> Fr</span>om our Menu</p>
        </div>
        <div className='items-menu '>
            <ul className='d-flex justify-content-between  menu-elements'>
                <li className='breakfast'>Breakfast</li>
                <li>Lunch</li>
                <li>Dinner</li>
                <li>Drink</li>
                <li>Snack</li>
                <li>Suops</li>
            </ul>
        </div>
        <div className=' d-flex mt-5 justify-content-between '>
            <div className='spinach-images mt-2'>
               <img src='/assets/images/spinach.svg' alt='spinach' className='spinach'/>
               <img src='/assets/images/vegetable-plate.svg' alt='vegetable-plate' className='vegetable-plate'/>
            </div>
            <div className='fresh-breakfast '>
                <div className='lettuce-feaf d-flex justify-content-between '> 
                    <img src='/assets/images/lettuse-leaf.svg' alt='lettuse-leaf' className='lettuse'/>
                  <div className='ml-3'>
                    <p className='lettuce-text'>Lettuce Leaf</p>
                    <p className='lettuce-matter'>Lacus nisi,et ac dapibus velit in consequant.</p>
                    <h3 className='cost'>12.5$</h3>
                  </div>
                </div>
                <div className='lettuce-feaf d-flex justify-content-between mt-4'> 
                    <img src='/assets/images/burger-breakfast.svg' alt='lettuse-leaf' className='lettuse'/>
                  <div>
                    <p className='lettuce-text'>Lettuce Leaf</p>
                    <p className='lettuce-matter'>Lacus nisi,et ac dapibus velit in consequant.</p>
                    <h3 className='cost'>12.5$</h3>
                  </div>
                </div>
                <div className='lettuce-feaf d-flex justify-content-between mt-4'> 
                    <img src='/assets/images/lettuse-leaf.svg' alt='lettuse-leaf' className='lettuse'/>
                  <div>
                    <p className='lettuce-text'>Lettuce Leaf</p>
                    <p className='lettuce-matter'>Lacus nisi,et ac dapibus velit in consequant.</p>
                    <h3 className='cost'>12.5$</h3>
                  </div>
                </div>
                <div className='lettuce-feaf d-flex justify-content-between mt-4'> 
                    <img src='/assets/images/lettuse-leaf.svg'alt='lettuse-leaf' className='lettuse'/>
                  <div>
                    <p className='lettuce-text'>Lettuce Leaf</p>
                    <p className='lettuce-matter'>Lacus nisi,et ac dapibus velit in consequant.</p>
                    <h3 className='cost'>12.5$</h3>
                  </div>
                </div>
            </div>
            <div className='fresh-breakfast '>
                <div className='lettuce-feaf d-flex justify-content-between '> 
                    <img src='/assets/images/lettuse-leaf.svg' alt='lettuse-leaf' className='lettuse'/>
                  <div  className='ml-3'>
                    <p className='lettuce-text'>Lettuce Leaf</p>
                    <p className='lettuce-matter'>Lacus nisi,et ac dapibus velit in consequant.</p>
                    <h3 className='cost'>12.5$</h3>
                  </div>
                </div>
                <div className='lettuce-feaf d-flex justify-content-between mt-4'> 
                    <img src='/assets/images/burger-breakfast.svg' alt='lettuse-leaf' className='lettuse '/>
                  <div>
                    <p className='lettuce-text'>Lettuce Leaf</p>
                    <p className='lettuce-matter'>Lacus nisi,et ac dapibus velit in consequant.</p>
                    <h3 className='cost'>12.5$</h3>
                  </div>
                </div>
                <div className='lettuce-feaf d-flex justify-content-between mt-4'> 
                    <img src='/assets/images/lettuse-leaf.svg' alt='lettuse-leaf' className='lettuse'/>
                  <div>
                    <p className='lettuce-text'>Lettuce Leaf</p>
                    <p className='lettuce-matter'>Lacus nisi,et ac dapibus velit in consequant.</p>
                    <h3 className='cost'>12.5$</h3>
                  </div>
                </div>
                <div className='lettuce-feaf d-flex justify-content-betweenmt mt-4'> 
                    <img src='/assets/images/lettuse-leaf.svg' alt='lettuse-leaf' className='lettuse'/>
                  <div>
                    <p className='lettuce-text'>Lettuce Leaf</p>
                    <p className='lettuce-matter'>Lacus nisi,et ac dapibus velit in consequant.</p>
                    <h3 className='cost'>12.5$</h3>
                  </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
