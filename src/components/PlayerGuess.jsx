import React from "react";
import "../App.css";

class PlayerGuess extends React.Component {
  letterGuess = letter => {
    this.props.isLetterInWord(letter.target.value.toUpperCase());
  };

  render() {
    return (
      <div className="word">
        <ul>
          {this.props.playerWord.map((letter, index) => {
            return (
              <li key={index}>
                {letter !== "_" ? (
                  <li className="showletter">{letter}</li>
                ) : (
                  <input
                    type="input"
                    onChange={this.letterGuess}
                    value=""
                  ></input>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default PlayerGuess;
