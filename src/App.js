import { useState } from "react";
import Buttons from "./Buttons";

function App() {
  const [cards, setCards] = useState([0,1, 2, 3, 4, 5, 6, 7, 8]);
  
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
