import React from "react";
import "../App.css";

const UsedLetters = props => {
  let uniqueUsed = [...new Set(props.usedletters)];

  return (
    <div className="usedCards">
      <ul>
        {uniqueUsed.map((letter, index) => {
          return <li key={index}>{letter}</li>;
        })}
      </ul>
    </div>
  );
};

export default UsedLetters;
