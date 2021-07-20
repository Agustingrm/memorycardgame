import Game from "./Components/Game";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  const style = {
    pageContainer: {
      position: "relative",
      minHeight: "100vh",
    },
    contentWrap: {
      paddingBottom: "40px",
    },
  };

  return (
    <div>
      <div style={style.pageContainer}>
        <div style={style.contentWrap}>
          <Header />
          <Game />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
