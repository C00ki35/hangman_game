import React from "react";

const Dead = props => {
  return (
    <div className="dead">
      <p>YOU GOT IT!</p>
      <p>{props.state.word}</p>
      <button className="deadButton">Play again?</button>
    </div>
  );
};

export default Dead;
