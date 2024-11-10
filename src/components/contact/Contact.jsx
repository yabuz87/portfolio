import React from "react"
import themePattern from "../../assets/theme_pattern.svg"
import "./Contact.css"
const Contact = () => {
  return (
    <div className="contact">
    <div className="contact-title">
    <h1>Get in touch</h1>
      <img src={themePattern}></img>
    </div>

  <div className="contact-section">
    <div className="contact-left">
        <h1>Let us talk</h1>
        <p>I am currently available to take new projects, so feel free to contact anytime</p>
        <div className="contact-details">
          <div className="conatct-detail">
        <img src={} alt=""/>
          </div>
          <div className="conatct-detail">
        <img src={} alt=""/>
          </div>
          <div className="conatct-detail">
        <img src={} alt=""/>
          </div>
        </div>
    </div>
    <div className="contact-right">

    </div>
  </div>
    </div>
  )
}

export default Contact
