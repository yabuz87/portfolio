import React from 'react'
import "./Mywork.css";
import themePattern from "../../assets/theme_pattern.svg";
import arrowIcon from "../../assets/arrow_icon.svg";
import workObj from "../../assets/mywork_data";

const Mywork = () => {
  return (
    <div  id="portfolio" className="mywork">
      <div className="container-title">
      <h1>My Work</h1>
      <img src={themePattern} alt="beneath-title"/>
      </div>
      <div className="mywork-container">
     {
      workObj.map((item,index)=>
      {
     return <img src={item.w_img} key={index}/>
      })
     }
     </div>
     <div className="mywork-showmore">
      <p>Show more</p>
      <img src={arrowIcon}/>
     </div>

    </div>
  )
}

export default Mywork
