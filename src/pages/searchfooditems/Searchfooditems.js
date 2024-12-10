import React from 'react'
import Searchfoodheader from './searchcomponents/Searchfoodheader'
import Searchfoodbody from './searchcomponents/Searchfoodbody'
import './Searchfooditems.css'

const Searchfooditems = ({data}) => {
  return (
    <div>
      <Searchfoodheader/>
      <Searchfoodbody />

    </div>
  )
}

export default Searchfooditems
