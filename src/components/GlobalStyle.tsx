import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    font-family: system-ui;
    background: #eee;
  }

  #app {
    display: contents;
  }
`;

export default GlobalStyle;
