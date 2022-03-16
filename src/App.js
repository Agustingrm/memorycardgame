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
    grid-template-rows: 90px calc(100% - 90px);
    align-content: center;
  }
  @media all and (max-width: 700px) {
    .contentWrap {
      grid-template-rows: 75px calc(100% - 75px);
    }
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
