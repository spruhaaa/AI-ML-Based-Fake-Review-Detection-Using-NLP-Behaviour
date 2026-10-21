import React, { useState } from "react";
import "../App.css"; // ✅ use global styles

function GetStarted() {
  const [review, setReview] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    if (review.length < 50) {
      setResult("❌ Fake Review Detected");
    } else {
      setResult("✅ Real Review");
    }
  };

  return (
    <div className="review-page">
      <div className="review-form">
        <h2>Paste your review below</h2>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Enter your review here..."
        />
        <button onClick={handleSubmit} disabled={!review.trim()}>
          Authenticate
        </button>
        {result && <div className="result">{result}</div>}
      </div>
    </div>
  );
}

export default GetStarted;
