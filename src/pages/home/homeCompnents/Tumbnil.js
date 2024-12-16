import React from 'react';
import { Link } from 'react-router-dom'; 
import './Tumbnil.css';

const Tumbnil = () => {
  return (
    <div>
        <div className='tumnil_head col-sm-'>
        {/* for 1 */}
        <div className='one'>
            {/* first lines */}
            <div>
              <img className="ms-1" src="/assets/images/Line1.svg" alt="Decorative Line" />
              <div>
                <Link to="/">
                  <img src="/assets/images/facebook.svg" className="facebook my-3" alt="Facebook" style={{ width: '10px', cursor: 'pointer' }} />
                </Link><br/>
                <Link to="/">
                  <img src="/assets/images/twitter.svg" className="twitter" alt="Twitter" style={{ width: '10px', cursor: 'pointer' }} />
                </Link><br/>
                <Link to="/">
                  <img src="/assets/images/printer.svg" className="printer my-3" alt="Printer" style={{ width: '10px', cursor: 'pointer' }} />
                </Link>
              </div>
              <img className="ms-1" src="/assets/images/Line1.svg" alt="Decorative Line" />
            </div>

        </div>

        {/* for 2 */}
        <div className='mt-5 ms-2 tumbnil_content '>
          <h1 className='gold mt-5'>Its Quick & Amusing!</h1>
          <h2 className='gold_1d mt-2 ms-4'><b><span className='th_orange'>Th</span>e Art of speed<br/> food Quality</b></h2>
          <p className='gold_2d'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.rius sed pharetra dictum neque massa congue</p>
          <Link to="/menu">
            <button type="button " className="btn btn-warning gold_b ms-4 mt-2">see menu</button>
          </Link>
        </div>

        {/* for 3 */}
        <div className='head_front_img1 ms-5'>
            <img src="/assets/images/front_Image1.svg" className="front_img1 ms-5 mt-5" alt="front_img1" />
        </div>
      </div>
    </div>
  )
}

export default Tumbnil;
