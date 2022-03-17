import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";
import "./App.css";
import { useStateValue } from "./State";
function Topbar() {
  const[{cart}] = useStateValue();
  console.log(cart);
  return (
    <nav className="header">
      <Link className="header_link" to="/home">
      <img
        className="logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      /></Link>

      <div className="search">
        <input className="searchbar" type="text" />
        <Link  className="header_link" to="/"><span> <i class="fas fa-search"></i></span></Link>
      </div>

      <div className="header_nav">
      <Link className="header_link" to="/login"> <div className="header_option">
          <span  className="header_option1">Hello</span>
          <span className="header_option2">Sign In</span>
          </div></Link>
          
          <Link className="header_link" to="/"> <div className="header_option">
          <span className="header_option1">Returns</span>
          <span className="header_option2"> & Orders</span>
          </div></Link>

          <Link className="header_link" to="/"><div className="header_option">
          <span className="header_option1">Your</span>
          <span className="header_option2">Prime</span>
          </div>
          </Link>
          <Link className="header_link" to="/checkout"><div className="header_basket">
            <span><i class="fas fa-shopping-basket"></i></span>
            <span>{cart?.length}</span>
          </div>
          </Link>
      </div>

    </nav>
  );
}

export default Topbar;
