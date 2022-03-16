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
import styled from "styled-components";

const CardDivStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 200px);
  grid-template-rows: repeat(2, minmax(50px, 200px));
  margin: auto;
  max-width: 1000px;
  height: 100%;
  align-content: center;
  padding: 5px 0;
  box-sizing: border-box;
  .cardStyle {
    padding: 5px 0;
    width: 200px;
    height: 100%;
    align-content: center;
    border: inset black 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  img {
    height: 100%;
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(5, calc(100vw / 5));
    grid-template-rows: repeat(2, calc(100vw / 5));
    .cardStyle {
      width: calc(100vw / 5);
      height: calc(100vw / 5);
    }
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, calc(77vh / 5));
    grid-template-rows: repeat(5, calc(77vh / 5));
    margin: 0 auto;
    justify-content: center;
    .cardStyle {
      width: calc(77vh / 5);
      height: calc(77vh / 5);
    }
  }
`;

const MessageBoxStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2;
  div {
    border: 3px solid white;
    background-color: black;
    padding: 100px;
    display: flex;
    flex-direction: column;
  }
  p {
    font-size: 25px;
    color: white;
    margin-top: 0;
    text-align: center;
  }
  button {
    background-color: black;
    border: 1px outset white;
    color: white;
    padding: 5px;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      border: 1px inset white;
    }
  }
  @media (max-width: 700px) {
    div {
      padding: 50px;
    }
  }
`;

function Game() {
  const imgIndex = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  const [cards, setCards] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [memory, setMemory] = useState([]);
  const [message, setMessage] = useState("");

  const handleShuffle = () => {
    let shuffledCards = cards.sort(() => Math.random() - 0.5);
    setCards([...shuffledCards]);
  };

  const handleGame = (number) => {
    setMemory([...memory, number]);
    let isARepeatedChoice = memory.findIndex((repeatedNumber) => repeatedNumber === number);
    if (memory.length === 9) {
      setMemory([]);
      setMessage("Congratulations! You won");
    } else if (isARepeatedChoice !== -1) {
      setMemory([]);
      setMessage("Game Over! Try again");
    }
  };

  const handleFunctions = (num) => {
    handleShuffle();
    handleGame(num);
  };

  const handleClick = () => {
    setMessage("");
  };

  return (
    <>
      {message && (
        <MessageBoxStyles>
          <div>
            <p>{message}</p>
            <button onClick={handleClick}>Play Again!</button>
          </div>
        </MessageBoxStyles>
      )}
      <CardDivStyles>
        {cards.map((num) => (
          <div className="cardStyle" key={num} onClick={() => handleFunctions(num)}>
            <img src={imgIndex[num]} alt="pokemon" />
          </div>
        ))}
      </CardDivStyles>
    </>
  );
}

export default Game;
