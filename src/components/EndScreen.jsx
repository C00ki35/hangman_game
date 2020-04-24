import React from "react";

const EndScreen = props => {
  if (!props.haswon) {
    return (
      <div className="win">
        <h1>DEAD!!</h1>
        <p>The word was: {props.winningWord}</p>
        <button className="winButton">Play again?</button>
      </div>
    );
  } else {
    return (
      <div className="win">
        <h1>YOU GOT IT!</h1>
        <p>The word was: {props.winningWord}</p>
        <button className="winButton">Play again?</button>
      </div>
    );
  }
};

export default EndScreen;
