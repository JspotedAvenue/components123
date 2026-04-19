import React from "react";
import "./Recommendation.css";

const data = [
  "НАЗВА НАБОРУ",
  "НАЗВА НАБОРУ",
  "НАЗВА НАБОРУ",
  "НАЗВА НАБОРУ",
  "НАЗВА НАБОРУ",
  "НАЗВА НАБОРУ",
  "НАЗВА НАБОРУ",
  "НАЗВА НАБОРУ",
];

export default function Recommendation() {
  return (
    <div className="recommendation">
      <h2 className="title">ДОДАТКОВІ РЕКОМЕНДАЦІЇ</h2>

      <div className="chips">
        {data.map((item, index) => (
          <div key={index} className="chip">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}