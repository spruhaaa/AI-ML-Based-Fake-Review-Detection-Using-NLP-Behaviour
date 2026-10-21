import React from "react";
import "../App.css"; // ✅ use global styles

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        Have questions, feedback, or suggestions? We’d love to hear from you.
        Reach out to our team using the details below.
      </p>

      <div className="contact-info">
        <p><strong>Email:</strong> pawaskarspruha11@gmail.com</p>
        <p><strong>Email:</strong> chavanswayam16@gmail.com</p>
        <p><strong>Address:</strong> Mumbai, Maharashtra, India</p>
      </div>

      <div className="contact-form">
        <h2>Send us a message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
