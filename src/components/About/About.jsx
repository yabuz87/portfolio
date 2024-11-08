import "./About.css"
import React from 'react'
import themePattern from "../../assets/theme_pattern.svg"
import profilePic from "../../assets/profile_img.svg"

const About = () => {
  return (
    <div className="about">
    <div className="about-title">
        <h1>About me</h1>
        <img src={themePattern} className="theme-pattern-img" alt="bottom to title;About me"></img>
    </div>
    <div className="about-content">
        <div className="about-left">
            <img src={profilePic} alt="profile pic"></img>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>i am experienced  frontend Developer in react, tailwind, bootstrap,javascript,next js and other hand on skills</p>
                <p>i am experienced  frontend Developer in react, tailwind, bootstrap,javascript,next js and other hand on skills</p>
            </div>
            <div className="skills">
               <div className="about-skill"><p> HTML</p> <hr style={{width:"40%"}}></hr></div>
               <div className="about-skill"><p> React js</p> <hr style={{width:"50%"}}></hr></div>
               <div className="about-skill"><p> javascript</p> <hr style={{width:"80%"}}></hr></div>
               <div className="about-skill"><p> tailwind and bootstrap</p> <hr style={{width:"40%"}}></hr></div>
               <div className="about-skill"><p> Next js</p> <hr style={{width:"30%"}}></hr></div>
            </div>
        </div>
    </div>
    <div className="acheivments">
    <div className="about-acheivment">
        <h1>3+</h1>
        <p>Years of Experience</p>
       
    </div>
     <hr/>
    <div className="about-acheivment">
        <h1>5+</h1>
        <p>completed Projects</p>
        
    </div>
    <hr/>
    
    <div className="about-acheivment">
        <h1>45+</h1>
        <p>satisfied clients</p>
    </div>

    </div>
    </div>
  )
}

export default About
