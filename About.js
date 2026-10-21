import React from "react";
import "../App.css"; // ✅ use global styles

function About() {
  return (
    <div className="about-page">
      <h1>About Fake Review Detector</h1>
      <p>
        Online shopping has transformed the way we buy products, but fake reviews
        have become a growing problem. Many sellers manipulate ratings and
        feedback to mislead customers. This project was created to help users
        identify whether a review is genuine or suspicious.
      </p>
      <p>
        The Fake Review Detector allows you to paste any product review into our
        system. Using text analysis and rule-based checks, the tool evaluates
        the content and instantly shows whether the review is likely authentic
        or fake.
      </p>
      <p>
        Built with React for the frontend, the project focuses on simplicity and
        usability. Navigation tabs are bold and centered for easy access, while
        the review form is designed to be large and user-friendly, making the
        experience smooth for everyone.
      </p>
      <p>
        Our mission is to empower online shoppers with transparency and
        confidence. By detecting fake reviews, we help users make smarter
        purchasing decisions and encourage sellers to maintain honest practices.
      </p>
    </div>
  );
}

export default About;
