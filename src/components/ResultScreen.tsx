import React, { useState } from "react";

export function ResultScreen() {
  const [showResult, setShowResult] = useState(false);
  return (
    <div>
      <h3>Your daily carbon dioxide emission is: </h3>
      <h4>How do you travel to work today?</h4>
      <input type="text" />
      <button
        className="button"
        onClick={(e) => {
          e.preventDefault();
          setShowResult(true);
          console.log("result");
        }}
      >
        See my result
      </button>
      {showResult && (
        <div>
          <h4>You have decreased carbon dioxide emission by: </h4>
          <h3>Rank: </h3>
        </div>
      )}
    </div>
  );
}
