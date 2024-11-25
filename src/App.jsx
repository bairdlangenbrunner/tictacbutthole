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
  const lettersToUse = ["B", "U", "T", "T", "H", "O", "L", "E", "•"];
  const [letters, setLetters] = useState(Array(9).fill(""));
  const [letterCount, setLetterCount] = useState(0);

  const resetBoard = () => {
    setLetters(Array(9).fill(""));
    setLetterCount(0);
  };

  const handleClick = (index) => {
    if (letters.every((item) => item !== "")) {
      resetBoard();
      return;
    }

    setLetters((prevLetters) => {
      const newLetters = [...prevLetters];
      newLetters[index] = newLetters[index] ? "" : lettersToUse[letterCount];
      return newLetters;
    });

    setLetterCount((prevLetterCount) =>
      prevLetterCount >= lettersToUse.length - 1 ? 0 : prevLetterCount + 1
    );
  };

  return (
    <div className="square-div">
      <Squares letters={letters} handleClick={handleClick} />
    </div>
  );
}