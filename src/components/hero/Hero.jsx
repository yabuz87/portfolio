import React from 'react';
import { Link as AnchorLink } from 'react-scroll';
import heroImage from "../../assets/dv.JPG";
import "./Hero.css";

const Hero = () => {
  const cv="https://yabuz87.github.io/CV/myCv.pdf";
  return (
    <div id="home" className="hero">
      <img src={heroImage} className="hero-img" alt="Hero section image"/>
      <h1><span>Hi, I am Called Yabets, </span>a frontend devloper  with new frontend tools</h1>
      <p>
      this is yabets persuing computer science at AAU a fullstack Devloper with different new and timely tools like  MERN stack,spring boot and next.js
      this is yabets persuing computer science at AAU a fullstack Devloper with different new and timely tools like  MERN stack,spring boot and next.js 
      </p>

      <div>
        <a href={cv} target="_blank"><button className="button1">my Cv</button></a>
        <AnchorLink className="anchor-link" to='contact' smooth={true} duration={200} offset={-50}><button className="button2">contact me</button></AnchorLink>
      </div>
    </div>
  )
}

export default Hero
