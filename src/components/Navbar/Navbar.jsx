import React, { useState } from "react";
import { Link as AnchorLink } from 'react-scroll';
import underline from "../../assets/nav_underline.svg";
import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <span className="logoname">Yab <span className="logoname-end">ets</span></span>
      <ul className="nav-menu">
        <li>
          <AnchorLink className='anchor-link' to='home' smooth={true} duration={200}>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : null}
        </li>
        <li>
          <AnchorLink className='anchor-link' to='about' smooth={true} duration={200} offset={-50}>
            <p onClick={() => setMenu("about")}>About me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : null}
        </li>
        <li>
          <AnchorLink className='anchor-link' to='portfolio' smooth={true} duration={500} offset={-50}>
            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" ? <img src={underline} alt="" /> : null}
        </li>
        <li>
          <AnchorLink className='anchor-link' to='services' smooth={true} duration={500} offset={-50}>
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} alt="" /> : null}
        </li>
        <li>
          <AnchorLink className='anchor-link' to='contact' smooth={true} duration={500} offset={-50}>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : null}
        </li>
      </ul>
      <div>
        <AnchorLink className="anchor-link" to='contact' smooth={true} duration={200} offset={-50}><button className="connect-btn">Get in touch</button></AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
