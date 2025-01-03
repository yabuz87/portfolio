import React from 'react';
import { Link as AnchorLink } from 'react-scroll';
 import heroImage from "../../assets/linkedin2.jpg";
import "./Hero.css";
const Hero = () => {
  const cv="https://yabuz87.github.io/CV/myCv.pdf";
  return (
    <div id="home" className="hero">
      {/* <div  ><img src={heroImage} className="hero-img " style={{width:"700px",height:"350px",objectFit: "contain"}}  alt="Hero section image"/></div> */}
      <h1><span>Hi, I am Called Yabets, </span>a Frontend devloper  with new frontend tools</h1>
      <p>
      This is yabets persuing computer science at AAU and learning   MERN stack Development,spring boot and next.js.Machine learning, and Computer Networking Learner.
      </p>

      <div>
        <a href={cv} target="_blank"><button className="button1">my Cv</button></a>
        <AnchorLink className="anchor-link" to='contact' smooth={true} duration={200} offset={-50}><button className="button2">contact me</button></AnchorLink>
      </div>
    </div>
  )
}

export default Hero
