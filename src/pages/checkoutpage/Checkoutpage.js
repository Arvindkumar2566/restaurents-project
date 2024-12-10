import React from "react";
import "./Checkoutpage.css";
import Checkoutpagebody from "./checkoutcomponents/Checkoutpagebody";
import Checkoutpageheader from "./checkoutcomponents/Checkoutpageheader";

const Checkoutpage = ({ cart, setCart }) => {
  return (
    <div className="bg-white text-dark">
      <Checkoutpageheader />
      <Checkoutpagebody cart={cart} setCart={setCart} />
    </div>
  );
};

export default Checkoutpage;
