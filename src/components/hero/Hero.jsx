import React from 'react'
 import heroImage from "../../assets/dv.JPG"
import "./Hero.css"

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img src={heroImage} className="hero-img" alt="Hero section image"/>
      <h1><span>Hi, I am Called Yabets, </span>a frontend devloper  with new frontend tools</h1>
      <p>
      this is yabets persuing computer science at AAU a fullstack Devloper with different new and timely tools like  MERN stack,spring boot and next.js
      this is yabets persuing computer science at AAU a fullstack Devloper with different new and timely tools like  MERN stack,spring boot and next.js
      this is yabets persuing computer science at AAU a fullstack Devloper with different new and timely tools like  MERN stack,spring boot and next.js
      this is yabets persuing computer science at AAU a fullstack Devloper with different new and timely tools like  MERN stack,spring boot and next.js
     
      </p>

      <div>
        <button className="button1">my Cv</button>
        <button className="button2">contact me</button>
      </div>
    </div>
  )
}

export default Hero
