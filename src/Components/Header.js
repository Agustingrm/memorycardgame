import styled from "styled-components";

const HeaderStyles = styled.div`
  background-color: black;
  padding: 10px 0;
  margin-bottom: 30px;
  height: 100%;
  h1 {
    color: white;
    margin: 0 0 10px 0;
    text-align: Center;
  }
  p {
    color: white;
    text-align: Center;
    margin: 0;
    font-size: 15px;
  }
  @media (max-width: 700px) {
    h1 {
      font-size: 17px;
    }
    p {
      font-size: 13px;
    }
  }
`;

function Header() {
  return (
    <HeaderStyles>
      <h1>Can you click all the diferrent Arceus?</h1>
      <p>
        <strong>Rules: </strong>To win this game you have to click once, and just once, every single Arceus
        below. Good Luck!
      </p>
    </HeaderStyles>
  );
}

export default Header;
