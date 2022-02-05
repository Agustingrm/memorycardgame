import Game from "./Components/Game";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import styled from "styled-components";

const PageContainerStyles = styled.div`
  position: relative;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 93% 5%;
  gap: 1%;
  .contentWrap {
    padding-bottom: 40px;
    height: 100vh;
    display: grid;
    width: 100%;
    grid-template-rows: 15% 85%;
    align-content: center;
  }
`;

function App() {
  return (
    <PageContainerStyles>
      <div className="contentWrap">
        <Header />
        <Game />
      </div>
      <Footer />
    </PageContainerStyles>
  );
}

export default App;
