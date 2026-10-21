import React from "react";
import "./Result.css";

function Result({ data }) {
  return (
    <div className="result-box">
      <h3>
        Prediction:{" "}
        <span className={data.prediction === 1 ? "genuine" : "fake"}>
          {data.prediction === 1 ? "Genuine ✅" : "Fake ❌"}
        </span>
      </h3>
      <p className="probability">
        Probability: {data.probability.join(", ")}
      </p>
    </div>
  );
}

export default Result;

