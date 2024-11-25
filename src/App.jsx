import { useState } from "react";

function Square({ letter, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {letter}
    </button>
  );
}

function Squares({ letters, handleClick, setLetters, lettersToUse }) {
  return letters.map((letter, index) => (
    <Square
      key={index}
      letter={letter}
      onClick={() => handleClick(index, setLetters, lettersToUse)}
    />
  ));
}

function handleClick(index, setLetters, lettersToUse) {
  console.log("clicked", index);
  setLetters((prevLetters) => {
    const newLetters = [...prevLetters];
    // if (newLetters[index] === '•') {
    // return newLetters
    // }
    newLetters[index] = newLetters[index] ? "" : lettersToUse[index];
    return newLetters;
  });
}

export default function App() {
  const lettersToUse = ["B", "U", "T", "T", "•", "H", "O", "L", "E"];
  const [letters, setLetters] = useState(Array(9).fill(""));

  return (
    <>
      <div className="square-div">
        <Squares
          letters={letters}
          setLetters={setLetters}
          lettersToUse={lettersToUse}
          handleClick={handleClick}
        />
      </div>
    </>
  );
}
