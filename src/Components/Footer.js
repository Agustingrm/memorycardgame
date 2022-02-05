import styled from "styled-components";

const BoxStyled = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  background-color: black;
  height: 40px;
  align-items: center;
  justify-content: center;
  p {
    font-size: 16px;
    font-weight: 500;
    color: white;
  }
`;

function Footer() {
  return (
    <BoxStyled>
      <p>
        Made with <span style={{ color: "red" }}>♥</span> by Agustín Gramajo Gaitán
      </p>
    </BoxStyled>
  );
}

export default Footer;
