import React from "react"
import themePattern from "../../assets/theme_pattern.svg"
import call_icon from "../../assets/call_icon.svg"
import location_icon from "../../assets/location_icon.svg"
import mail_icon from "../../assets/mail_icon.svg"
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
        <img src={mail_icon} alt=""/><p>Jabezsolomonz@gmail.com</p>
          </div>
          <div className="conatct-detail">
        <img src={call_icon} alt=""/><p>+2510001133</p>
          </div>
          <div className="conatct-detail">
        <img src={location_icon} alt=""/><p></p>
          </div>
        </div>
    </div>
    <form className="contact-right">
      <label htmlFor="">Your Name</label>
      <input type="text" placeholder="Enter your name" name="name"></input>
      <label htmlFor="">Your Email</label>
      <input type="email" placeholder="Enter your email" name="email"></input>
      <label htmlFor="">Write your Message here</label>
      <textarea name="message" id=""  rows="8" placeholder="Enter your message"></textarea>
      <button className="contact-submit">Submit</button>
    </form>
  </div>
    </div>
  )
}

export default Contact
