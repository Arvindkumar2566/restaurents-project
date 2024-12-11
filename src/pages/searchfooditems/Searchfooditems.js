import React from "react";
import { useLocation } from "react-router-dom";
import Searchfoodbody from "./searchcomponents/Searchfoodbody";
import Searchfoodheader from "./searchcomponents/Searchfoodheader";
import './Searchfooditems.css'

const Searchfood = () => {
  const location = useLocation();
  const searchData = location.state?.searchData || [];

  return (
    <div className="container mt-4"> 
      <Searchfoodheader/>
      <Searchfoodbody data={searchData} />
    </div>
  );
};

export default Searchfood;
