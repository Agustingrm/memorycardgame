function Buttons(props) {
  const cards = props.cards;
  const handleShuffle = props.handleShuffle;

  return cards.map((cards) => <button onClick={handleShuffle}>{cards}</button>);
}

export default Buttons;
