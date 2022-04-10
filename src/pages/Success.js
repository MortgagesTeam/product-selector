import React from 'react'
import AboutImage from "../images/AboutImage.jpg";
import "../styles/About.css";

function Success() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1> Congratulations..!!</h1>
        <br/>
        <br/>
        <br/>
        <h3>
          Your application has been submitted successfully.
        </h3>
      </div>
    </div>
  )
}

export default Success
