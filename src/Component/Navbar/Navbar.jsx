import React from "react";
import logo from "./Logo.png"
import "./Navbar.css"

function Navbar() {
	return (
      <ul id="navbar" className='topnav'>
      <li><img src={logo} className="logo"></img></li>
      <li>
        <a className='active'>
        <p>
        <span>Egyptian-German </span>   <sub>College</sub> 
        </p>
        </a>
        </li>

      <li><a href="#">Home</a></li>
        <div className='dropdown'>
          <button className='dropbtn'>About College</button>
          <div className='dropdown-content'>
            <a href="#">About College</a>
            <a href="#">college Council</a>
            <a href="#">Teaching System</a>
          </div>
          </div>
        <div className='dropdown'>
          <button className='dropbtn'>About School</button>
          <div className='dropdown-content'>
            <a href="#">About College</a>
            <a href="#">college Council</a>
            <a href="#">Teaching System</a>
          </div>
        </div> 
      <li><a href="">Contact US</a></li> 
  <li className="lang">
     <div className='box'>
         <select>
           <option> language</option>
           <option>English</option>
           <option>Arabic</option>
         </select>
       </div>
  </li>
  </ul>
  );
}

export default Navbar;