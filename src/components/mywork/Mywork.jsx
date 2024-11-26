import React from 'react'
import "./Mywork.css";
import themePattern from "../../assets/theme_pattern.svg";
import arrowIcon from "../../assets/arrow_icon.svg";
import workObj from "../../assets/mywork_data";

const Mywork = () => {
  return (
    <div  id="work" className="mywork">
      <div className="container-title">
      <h1>My Work</h1>
      <img src={themePattern} alt="beneath-title"/>
      </div>
      <div className="mywork-container">
     {
      workObj.map((item,index)=>
      {
     return <a href={item.link} target="_blank"> 
     <img src={item.w_img} key={index}/>
            </a>
      })
     }
     </div>
     <a href="https://github.com/yabuz87" target="_blank">
     <div className="mywork-showmore">
      
      <p>Show more</p>

      <img src={arrowIcon}/>
     
     </div>
     </a>
    </div>
  )
}

export default Mywork
