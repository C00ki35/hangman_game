import React from "react";
import "./App.css";
import Logo from "./components/Logo";
import Lives from "./components/Lives";
import PlayerGuess from "./components/PlayerGuess";
import HangMan from "./components/HangMan";
import UsedLetters from "./components/UsedLetters";
import EndScreen from "./components/EndScreen";

class App extends React.Component {
  state = {
    word: "",
    lives: 4,
    hearts: [
      "../images/heart.gif",
      "../images/heart.gif",
      "../images/heart.gif",
      "../images/heart.gif"
    ],
    hangman: ["h1", "h2", "h3", "h4", "h5"],
    hangmanimage: 1,
    playerWord: [],
    gameEnd: false,
    used: [],
    hasWon: false
  };

  componentDidMount() {
    const possibleWords = [
      "AMBULANCE",
      "ONYX",
      "ELEPHANT",
      "REACT",
      "MARSHMALLOW",
      "GARAGE",
      "SUNSET",
      "BIKE",
      "HAMMER"
    ];
    const chosenWord =
      possibleWords[Math.floor(Math.random() * possibleWords.length)];
    this.setState(
      currentState => {
        return { word: chosenWord };
      },
      () => {
        const makeWordArray = new Array(this.state.word.length).fill("_");
        this.setState(currentState => {
          return { playerWord: makeWordArray };
        });
      }
    );
  }

  isLetterInWord = letter => {
    if (this.state.word.includes(letter)) {
      this.setState(
        currentState => {
          const updatedWord = { ...currentState };
          for (let i = 0; i < currentState.word.length; i++) {
            if (currentState.word === " ") {
              continue;
            }
            if (currentState.word[i] === letter) {
              updatedWord.playerWord[i] = letter;
            }
          }
          return {
            playerWord: updatedWord.playerWord,
            used: [...currentState.used, letter]
          };
        },
        () => {
          const guessedWord = this.state.playerWord.join("");
          if (guessedWord === this.state.word) {
            setTimeout(() => {
              this.setState({ gameEnd: true, hasWon: true });
            }, 3000);
          }
        }
      );
    } else {
      this.setState(
        currentState => {
          currentState.hearts.pop();
          currentState.hangman.shift();
          return {
            lives: currentState.lives - 1,
            used: [letter, ...currentState.used, letter],
            hearts: [...currentState.hearts],
            hangman: [...currentState.hangman]
          };
        },
        () => {
          if (this.state.lives === 0) {
            setTimeout(() => {
              this.setState(currentState => {
                return { gameEnd: true, hasWon: false };
              });
            }, 2000);
          }
        }
      );
    }
  };

  render() {
    if (!this.state.gameEnd) {
      return (
        <div className="container">
          <div class="logo">
            <Logo />
          </div>
          <div className="lives">
            <Lives
              lives={this.state.lives}
              isLetterInWord={this.isLetterInWord}
              hearts={this.state.hearts}
            />
          </div>
          <div className="usedletters">
            <UsedLetters usedletters={this.state.used} />
          </div>
          <div className="hangman">
            <HangMan hangman={this.state.hangman} />
          </div>
          <div className="letters">
            <PlayerGuess
              playerWord={this.state.playerWord}
              isLetterInWord={this.isLetterInWord}
            />
          </div>
        </div>
      );
    } else {
      return (
        <EndScreen haswon={this.state.hasWon} winningWord={this.state.word} />
      );
    }
  }
}
export default App;
