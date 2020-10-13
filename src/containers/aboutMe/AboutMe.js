import React from "react";
import "./AboutMe.css";
import { skillsSection } from "../../portfolio";
import {Fade} from "react-reveal";

export default function AboutMe() {
  return (
    <div className="main" id="about-me">
      <div className="about-me-div-heading">
        <h1 className="about-me-heading">{skillsSection.title} </h1>
      </div>
      <div className="about-me-main-div">
        
        <Fade left duration={1000}>
        <div className="about-me-image-div">
          <img alt="hi, this is me" src={require("../../assets/images/IMG_1539.JPG")}></img>
        </div>
        </Fade>
        <Fade right duration={1000}>
        <div className="about-me-text-div">
          <p className="subTitle about-me-text-subtitle">{skillsSection.para}</p>
          <p className="subTitle about-me-text-subtitle">{skillsSection.paraTwo}</p>
          <p className="subTitle about-me-text-subtitle">{skillsSection.paraThree}</p>
          <p className="subTitle about-me-text-subtitle">{skillsSection.paraFour}</p>
          <p className="subTitle about-me-text-subtitle">{skillsSection.paraFive}</p>
          <p className="subTitle about-me-text-subtitle">{skillsSection.paraSix}</p>
        </div>
        </Fade>
      </div>
    </div>
  );
}
