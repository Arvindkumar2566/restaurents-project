import React from 'react'
import Searchfoodheader from './searchcomponents/Searchfoodheader'
import Searchfoodbody from './searchcomponents/Searchfoodbody'
import './Searchfooditems.css'

const Searchfooditems = ({search,setSearch}) => {
  return (
    <div>
      <Searchfoodheader/>
      <Searchfoodbody search={search} setSearch={setSearch}/>

    </div>
  )
}

export default Searchfooditems
