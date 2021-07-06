// import { useState } from "react";
import img1 from './assets/pokemonSVG/2.svg'

function App() {
  // const [cards, setCards] = useState({
  //   selectedCharacters: [],
  // });

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      return (
      images[item.replace("./", "")] = r(item));
    });
    return images;
  }

  const images = importAll(
    require.context("./assets/pokemonSVG", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div>
      <img src={img1} alt='nada' />
    </div>
  );
}

export default App;
