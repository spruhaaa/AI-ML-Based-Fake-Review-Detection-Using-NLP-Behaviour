import React, { useState } from "react";

function ReviewForm() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ review: inputText }), // ✅ backend expects { review: "..." }
      });

      const data = await response.json();
      setResult(data.prediction);
    } catch (error) {
      setResult("⚠️ Could not connect to backend.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="review-form">
      <h2>Check Your Review</h2>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter your review here..."
        rows="5"
        cols="50"
      />
      <br />
      <button onClick={handleSubmit} disabled={loading || !inputText}>
        {loading ? "Checking..." : "✨ Check Review ✨"}
      </button>

      {result && (
        <div className="result">
          Prediction: <strong>{result}</strong>
        </div>
      )}
    </div>
  );
}

export default ReviewForm;
