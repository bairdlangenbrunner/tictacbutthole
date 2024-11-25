import { useState } from "react";

function Square({ letter, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {letter}
    </button>
  );
}

function Squares({ letters, handleClick }) {
  return letters.map((letter, index) => (
    <Square key={index} letter={letter} onClick={() => handleClick(index)} />
  ));
}

export default function App() {
  const letterArray = ["B", "U", "T", "T", "H", "O", "L", "E", "•"].reverse();
  const [lettersLeftover, setLettersLeftover] = useState(letterArray);
  const [letters, setLetters] = useState(Array(9).fill(""));

  const resetBoard = () => {
    setLetters(Array(9).fill(""));
    setLettersLeftover(letterArray);
  };

  const handleClick = (index) => {
    if (letters.every((letter) => letter !== "")) {
      resetBoard();
      return;
    }

    // if square is '', change to letters leftover; update everything
    if (letters[index] === "") {
      setLetters((prevLetters) => {
        let newLetters = [...prevLetters];
        newLetters[index] = lettersLeftover[lettersLeftover.length - 1];
        console.log(newLetters);
        return newLetters;
      });
      setLettersLeftover((prevLettersLeftover) => {
        return prevLettersLeftover.slice(0, -1);
      });
    }

    // if square has a letter in it, put that letter back in the leftover array and make it blank
    if (letters[index] !== "") {
      setLetters((prevLetters) => {
        let newLetters = [...prevLetters];
        newLetters[index] = "";
        console.log(newLetters);
        return newLetters;
      });
      setLettersLeftover((prevLettersLeftover) => {
        return [...prevLettersLeftover, letters[index]];
      });
    }
  };

  return (
    <div className="square-div">
      <Squares letters={letters} handleClick={handleClick} />
    </div>
  );
}
