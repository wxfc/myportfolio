import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import AboutMe from "./aboutMe/AboutMe";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Background from "./background/background";
import Top from "./topbutton/Top";
import Profile from "./profile/Profile";

export default class Main extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
        <Background />
        <Header />
        <Greeting />
        <AboutMe />
        <Experience /> 
        <Projects />
        <Profile />
        <Top />
        </div>
      </div>
    );
  }
}
