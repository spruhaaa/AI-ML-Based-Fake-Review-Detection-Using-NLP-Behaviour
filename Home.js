import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // ✅ page-specific styles

function Home() {
  return (
    <div className="home-container">
      <div className="hero">
        <h1>Welcome to Fake Review Detector</h1>
        <p>KNOW THE PERCENTAGE OF FAKE REVIEWS OF YOUR FAVORITE PRODUCTS!</p>
        <Link to="/getstarted" className="cta-button">GET STARTED 👆</Link>
      </div>
    </div>
  );
}

export default Home;
