import React from 'react'
import Blogdetailsbody from './Blogdetailscomponenets/Blogdetailsbody'
import Blogdetailsheader from './Blogdetailscomponents/Blogdetailsheader'
import './Blogdetails.css'

export default function Blogdetails() {
  return (
    <div className=' blogd'>
        <Blogdetailsheader/>
      <Blogdetailsbody/>
    </div>
  )
}