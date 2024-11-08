import React from "react"

import "./Navbar.css"

function Navbar(){
  return (

    <div className="navbar">
      <span className="logoname">Yab <span className="logoname-end">ets</span></span>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About me</li>
        <li>Portfolio</li>
        <li>services</li>
      </ul>
      <div>
        <button className="connect-btn">Get in touch</button>
      </div>
    </div>

  )
}

export default Navbar
