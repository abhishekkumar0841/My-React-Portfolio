import React, { useEffect, useRef } from "react";
import "./Intro.scss";
import man from "../../images/man.png";
import { AiOutlineArrowDown } from "react-icons/ai";
import { init } from "ityped";
import myResume from '../../components/Intro/Abhishek Resume july.pdf';
import Button from "../Button/Button";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 30,
      strings: ["Web Developer", "&", "Designer"],
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
          <div className="buttons">
            <a href="#contact">
            {/* <button>Hire Me</button> */}
            <Button text="Hire Me" />
            </a>
            <a href={myResume} download>
            <Button text="Download CV" />
            </a>
          </div>
        </div>
        <a href="#skills" className="downArrow">
          <AiOutlineArrowDown className="downArrowIcon" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
