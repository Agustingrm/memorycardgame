import { createGlobalStyle } from "styled-components";
import wallpaper from "../wallpaper.png";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap');
* {
  box-sizing: border-box;
}

body {
  font-family: "Titillium Web", sans-serif;
  margin: 0px;
  background: url(${wallpaper}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  box-sizing
}

button {
  font-family: "Titillium Web", sans-serif;
}
`;

export default GlobalStyles;
