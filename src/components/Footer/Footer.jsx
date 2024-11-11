import React from 'react'
import footerLogo from "../../assets/footer_logo.svg"
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import userIcon from "../../assets/user_icon.svg";
import  "./footer.css";

const Footer = () => {
  return (
    <div className="fotter">
      <div className="footer-top">
    <div className="footer-top-left">
    <span className="logoname">Yab <span className="logoname-end">ets</span></span>
      <p> I am a frontend Developer from, Ethiopia with 1 year of experience </p>
    </div>
    <div className="footer-top-right">
      <div className="footer-email-input">
        <img src={userIcon} alt=""/>
        <input type="email" placeholder="Enter your email"/>
      </div>
      <div className="footer-subscribe">Subscribe</div>
    </div>

      </div>
      <hr/>
      <div className="footer-bottom">
      <p className="footer-bottom-left"><i className="bi bi-c-circle"></i>
      All rights &nbsp; Yabets,</p>
      <div className="footer-bottom-right">
        <p>Term of Services</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
      </div>
    </div>
    </div>
  )
}

export default Footer
