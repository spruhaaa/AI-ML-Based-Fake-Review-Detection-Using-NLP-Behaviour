import React from "react";
import "../App.css"; // ✅ use global styles

function Team() {
  return (
    <div className="team-page">
      <h1>Meet the Team</h1>
      <p>
        Our project was built by a passionate team of developers and designers
        who believe in creating tools that make online shopping safer and more
        transparent. Each member contributed unique skills to bring the Fake
        Review Detector to life.
      </p>

      <div className="team-members">
        <div className="team-card">
          <h2>Spruha & Swayam</h2>
          <p>Frontend Developer</p>
          <p>Designed the user interface and implemented React components.</p>
        </div>

        <div className="team-card">
          <h2>Spruha Pawaskar</h2>
          <p>Backend Developer</p>
          <p>Worked on review analysis logic and API integration.</p>
        </div>

        <div className="team-card">
          <h2>Swayam Chavan</h2>
          <p>UI/UX Designer</p>
          <p>Created clean layouts and ensured smooth user experience.</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
