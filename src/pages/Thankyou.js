import React from 'react'
import AboutImage from "../images/AboutImage.jpg";
import "../styles/About.css";

function Thankyou() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1> Thank You..!!</h1>
        <br/>
        <br/>
        <br/>
        <h3>
          Your Query has been forwarded to our team, we will reach out to you soon.
        </h3>
      </div>
    </div>
  )
}

export default Thankyou

