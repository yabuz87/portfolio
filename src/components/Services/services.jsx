import React from 'react'
import "./services.css"
import themepattern from "../../assets/theme_pattern.svg"
import  serviceObj from "../../assets/services_data";
import arrowIcon from "../../assets/arrow_icon.svg"

const Services = () => {
  return (
    <div id="services" className="services">
    <div className="service-title">
        <h1>Services</h1>
        <img src={themepattern} alt="below the Serivce title"/>
    </div>
    <div className="service-container">
       { serviceObj.map((item,index)=>
       {
      return  <div key={index} className="service-format">
        <h3 className="">{item.s_no}</h3>
        <h2>{item.s_name}</h2>
        <p>{item.s_desc}</p>
        <div className="services-readmore">
            <p>Read More</p>
            <img src={arrowIcon} alt="arrow icon"/>
        </div>
        </div>
       })}
    </div>
    </div>
  )
}

export default Services
