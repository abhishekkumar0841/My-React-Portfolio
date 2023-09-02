import React, { useEffect, useRef } from "react";
import "./Intro.scss";
import man from "../../images/man.png";
import { AiOutlineArrowDown } from "react-icons/ai";
import { init } from "ityped";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 30,
      strings: ["Web Developer", "and", "Designer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src={man} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Abhishek Kumar</h1>
          <h3>
            A Passionate.. <span ref={textRef}></span>{" "}
          </h3>
        </div>
        <a href="#skills">
          <AiOutlineArrowDown className="downArrow" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
