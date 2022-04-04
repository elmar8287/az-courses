import React from "react";
import './Contact.css';

const Contact = () => (
  <div className="contact-form">
    <h2>Leave your message</h2>
    <form>
      <input type="text" placeholder="Your name.." />
      <input type="text" placeholder="Your last name.." />
      <textarea placeholder="Write something.." />
      <input type="submit" value="Send" />
    </form>
  </div>
);

export default Contact;