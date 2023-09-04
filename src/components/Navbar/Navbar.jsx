import React from "react";
import "./Navbar.scss";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"navbar " + (menuOpen && 'active') }>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            AK.io
          </a>
          <div className="itemContainer">
            <FiPhoneCall className="icon" />
            <span>9525771466</span>
          </div>
          <div className="itemContainer">
            <FiMail className="icon" />
            <span>abhishekkumar0841@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
