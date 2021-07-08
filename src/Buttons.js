import './assets/Buttons.css';
import img1 from "./assets/pokemonSVG/1.svg";
import img2 from "./assets/pokemonSVG/2.svg";
import img3 from "./assets/pokemonSVG/3.svg";
import img4 from "./assets/pokemonSVG/4.svg";
import img5 from "./assets/pokemonSVG/5.svg";
import img6 from "./assets/pokemonSVG/6.svg";
import img7 from "./assets/pokemonSVG/7.svg";
import img8 from "./assets/pokemonSVG/8.svg";
import img9 from "./assets/pokemonSVG/9.svg";

function Buttons(props) {
  const cards = props.cards;
  const handleShuffle = props.handleShuffle;
  const imgIndex = [img1, img2, img3, img4, img5, img6, img7, img8, img9];



  return (
    <div className='cardDivStyle'>
      {cards.map((num) => (
        <div className='cardStyle'>
          <img
            src={imgIndex[num]}
            alt="pokemon"
            onClick={handleShuffle}
            className='imgSize'
          />
        </div>
      ))}
    </div>
  );
}

export default Buttons;
