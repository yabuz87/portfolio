import React, { useRef, useState } from "react";
import { Link as AnchorLink } from 'react-scroll';
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg"
import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState("home");
  const menuRerf=useRef();
const openMenu=()=>
{
  menuRerf.current.style.right="0";
}
const closeMenu=()=>
{
 
  menuRerf.current.style.right="-350px";
}
  return (
    <div className="navbar">
      <span className="logoname">Yab <span className="logoname-end">ets</span></span>
      <img src={menu_open} alt="" className="nav-mob-open" onClick={openMenu} />
      <ul ref={menuRerf} className="nav-menu">
      <img src={menu_close} className="nav-mob-close" onClick={closeMenu} alt=""></img>
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
          <AnchorLink className='anchor-link' to='work' smooth={true} duration={500} offset={-50}>
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
      <div className="nav-connect">
        <AnchorLink className="anchor-link" to='contact' smooth={true} duration={200} offset={-50}><button className="connect-btn">Get in touch</button></AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
