import React from "react";
import "../App.css";

const Lives = props => {
  const hearts = props.hearts.map((heart, index) => {
    return (
      <li key={index}>
        <img
          width="70"
          height="70"
          src={require("../images/heart.gif")}
          alt="heart"
        />
      </li>
    );
  });

  return (
    <div className="heartsBar">
      <div className="hearts">{hearts.reverse()}</div>
    </div>
  );
};

export default Lives;
