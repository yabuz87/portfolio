import React from "react"
import themePattern from "../../assets/theme_pattern.svg"
import call_icon from "../../assets/call_icon.svg"
import location_icon from "../../assets/location_icon.svg"
import mail_icon from "../../assets/mail_icon.svg"
import "./Contact.css"

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2c55e4e3-77cc-45cc-8dc9-00881004a1b9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
    else 
    {
      alert(res.error.message);
    }
  };
  return (
    <div className="contact">
    <div className="contact-title">
    <h1>Get in touch</h1>
      <img className="contact-img-title" src={themePattern}></img>
    </div>

  <div  id='contact' className="contact-section">
    <div className="contact-left">
        <h1>Let us talk</h1>
        <p>I am currently available to take new projects, so feel free to contact anytime</p>
        <div className="contact-details">
          <div className="conatct-detail">
        <img src={mail_icon} alt="email"/><p>Jabezsolomonz@gmail.com</p>
          </div>
          <div className="conatct-detail">
        <img src={call_icon} alt="Phone"/><p>+251972713987</p>
          </div>
          <div className="conatct-detail">
        <img src={location_icon} alt="location"/><p>Addis Ababa, Ethiopia</p>
          </div>
        </div>
    </div>
    <form onSubmit={onSubmit} className="contact-right">
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
