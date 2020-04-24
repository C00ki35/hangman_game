import React from "react";
import h1 from "../images/h1.png";
import h2 from "../images/h2.png";
import h3 from "../images/h3.png";
import h4 from "../images/h4.png";
import h5 from "../images/h5.png";

const HangMan = props => {
  let whichImage = "";
  if (props.hangman[0] === "h1") {
    whichImage = h1;
  }
  if (props.hangman[0] === "h2") {
    whichImage = h2;
  }
  if (props.hangman[0] === "h3") {
    whichImage = h3;
  }
  if (props.hangman[0] === "h4") {
    whichImage = h4;
  }
  if (props.hangman[0] === "h5") {
    whichImage = h5;
  }
  return (
    <div className="hangbody">
      <p>
        <img
          className="hangman-image"
          src={`${whichImage}`}
          alt="hangmanimage"
        />
      </p>
    </div>
  );
};

export default HangMan;
