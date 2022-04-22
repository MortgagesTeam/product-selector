import React from "react";
import ContactImage from "../images/ContactImage.png";
import "../styles/Contact.css";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactImage})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <Link to={`/thankyou`}>
            <button > Send Message </button>
          </Link>
          {/* <button type="submit"> Send Message</button> */}
        </form>
      </div>
    </div>
  );
}

export default Contact;
