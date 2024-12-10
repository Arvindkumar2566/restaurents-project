import React from "react";
import { useLocation } from "react-router-dom";
import Searchfoodbody from "./searchcomponents/Searchfoodbody";
import Searchfoodheader from "./searchcomponents/Searchfoodheader";

const Searchfood = () => {
  const location = useLocation();
  const searchData = location.state?.searchData || [];

  return (
    <div className="container mt-4">
      <Searchfoodheader/>
      <h3>Search Results</h3>

      <Searchfoodbody data={searchData} />
    </div>
  );
};

export default Searchfood;
