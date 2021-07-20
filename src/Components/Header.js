function Header() {
  const style = {
    header: {
      backgroundColor: "black",
      padding: "10px 0",
      marginBottom: "30px",
    },
    title: {
      color: "white",
      margin: "0 0 10px 0",
      textAlign: "Center",
    },
    text: {
      color: "white",
      textAlign: "Center",
      margin: "0",
    },
  };
  return (
    <div style={style.header}>
      <h1 style={style.title}>Can you click all the diferrent Arceus?</h1>
      <p style={style.text}>
        <strong>Rules: </strong>To win this game you have to click once, and just once, every single Arceus below. Good Luck!
      </p>
    </div>
  );
}

export default Header;
