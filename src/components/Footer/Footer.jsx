import React from 'react'
import footerLogo from "../../assets/footer_logo.svg"
import  "./footer.css";

const footer = () => {
  return (
    <div className="fotter">
      <div className="footer-top">
    <div className="footer-top-left">
      <img src={footerLogo}/>
      <p> I am a frontend Developer from, Ethiopia with 1 year of experience </p>
    </div>
    <div className="footer-top-left">
      <div className="footer-email-input">
    
      </div>
    </div>

      </div>
    </div>
  )
}

export default footer
