import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    user-select: none;
  }

  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    font-family: system-ui;
    background: ${props => props.theme.background};
    color: ${props => props.theme.text.primary};
  }

  #app {
    display: contents;
  }
`;

export default GlobalStyle;
