import React from "react";
import "./Footer.scss";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="left">
        <div className="logo">AK.io</div>
        <div className="address">
          <p>Super city colony</p>
          <p>Mhow gaon</p>
          <p>Indore,</p>
          <p>Madhya Pradesh:- 453441</p>
        </div>
      </div>
      <div className="right">
        <div className="firstLine">
          <div className="items">
            <FiPhoneCall className="icon" />
            <span>9525771466</span>
          </div>
          <div className="items">
            <FiMail className="icon" />
            <span>abhishekkumar0841@gmail.com</span>
          </div>
        </div>
        <div className="secondLine">
          <a href="https://github.com/abhishekkumar0841">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/abhishek-kumar-388117266/">
            {" "}
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
