import React,{useState}from "react"
import { Link as AnchorLink } from 'react-scroll';
import underline from "../../assets/nav_underline.svg"
import "./Navbar.css"

function Navbar(){
  const [menu, setMenu]=useState("home");

  return (

    <div className="navbar">
      <span className="logoname">Yab <span className="logoname-end">ets</span></span>
      <ul className="nav-menu">
        <li><AnchorLink className='anchor-link' offset={50} href={'#home'}><p onClick={()=>setMenu("hero")}>Home</p></AnchorLink>{menu=="home"?<img src={underline} alt=""/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href={'#about'}><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu=="about"?<img src={underline} alt=""/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href={'#portfolio'}><p onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu=="portfolio"?<img src={underline} alt=""/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href={'#work'}><p onClick={()=>setMenu("services")}>services</p></AnchorLink>{menu=="services"?<img src={underline} alt=""/>:<></>}</li>
      </ul>
      <div>
        <button className="connect-btn">Get in touch</button>
      </div>
    </div>

  )
}

export default Navbar
