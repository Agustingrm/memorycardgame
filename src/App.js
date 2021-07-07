import { useState } from "react";
// import img1 from './assets/pokemonSVG/1.svg'
// import img2 from './assets/pokemonSVG/2.svg'
// import img3 from './assets/pokemonSVG/3.svg'
// import img4 from './assets/pokemonSVG/4.svg'
// import img5 from './assets/pokemonSVG/5.svg'
// import img6 from './assets/pokemonSVG/6.svg'
// import img7 from './assets/pokemonSVG/7.svg'
// import img8 from './assets/pokemonSVG/8.svg'
// import img9 from './assets/pokemonSVG/9.svg'
import Buttons from "./Buttons";

function App() {
  const [cards, setCards] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const handleShuffle = () => {
    let shuffledCards = cards.sort(() => Math.random() - 0.5)
    setCards([...shuffledCards])
  };

  return (
    <div>
      <Buttons cards={cards} handleShuffle={handleShuffle}/>
    </div>
  );
}

export default App;
