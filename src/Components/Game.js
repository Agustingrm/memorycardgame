import "../assets/Buttons.css";
import img1 from "../assets/pokemonSVG/1.svg";
import img2 from "../assets/pokemonSVG/2.svg";
import img3 from "../assets/pokemonSVG/3.svg";
import img4 from "../assets/pokemonSVG/4.svg";
import img5 from "../assets/pokemonSVG/5.svg";
import img6 from "../assets/pokemonSVG/6.svg";
import img7 from "../assets/pokemonSVG/7.svg";
import img8 from "../assets/pokemonSVG/8.svg";
import img9 from "../assets/pokemonSVG/9.svg";
import img10 from "../assets/pokemonSVG/10.svg";
import { useState } from "react";

function Game() {
  const imgIndex = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  const [cards, setCards] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [memory, setMemory] = useState([]);

  const handleShuffle = () => {
    let shuffledCards = cards.sort(() => Math.random() - 0.5);
    setCards([...shuffledCards]);
  };

  const handleGame = (number) => {
    setMemory([...memory, number]);
    let isARepeatedChoice = memory.findIndex((repeatedNumber) => repeatedNumber === number);
    if (memory.length === 9) {
      alert("Congratulations! You won");
      setMemory([]);
    } else if (isARepeatedChoice !== -1) {
      setMemory([]);
      alert("Game Over! Try again");
    }
  };

  const handleFunctions = (num) => {
    handleShuffle();
    handleGame(num);
  };

  return (
    <div className="cardDivStyle">
      {cards.map((num) => (
        <div className="cardStyle" key={num}>
          <img src={imgIndex[num]} alt="pokemon" onClick={() => handleFunctions(num)} className="imgSize" />
        </div>
      ))}
    </div>
  );
}

export default Game;
