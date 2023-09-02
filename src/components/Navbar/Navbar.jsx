import React from "react";
import "./Navbar.scss";
import { BsPersonCircle } from "react-icons/bs";
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
            <BsPersonCircle className="icon" />
            <span>+88 45 78</span>
          </div>
          <div className="itemContainer">
            <FiMail className="icon" />
            <span>abhishekkumar@gmail.com</span>
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
