import React, { FC } from "react";
import styled, { ThemeProvider } from "styled-components";
import useColorScheme from "../hooks/useColorScheme";
import themes from "../themes";
import Dashboard from "./Dashboard";
import GlobalStyle from "./GlobalStyle";
import StatusBarHighlight from "./StatusBarHighlight";
import ThemeColor from "./ThemeColor";
import Toast from "./Toast";

const Container = styled.div`
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
`;

const App: FC = () => {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider theme={themes[colorScheme]}>
      <>
        <GlobalStyle />
        <ThemeColor />
        <Container>
          <StatusBarHighlight />
          <Toast
            show={false}
            title="Dashboard has been updated"
            description="Press to reload"
          />
          <Dashboard />
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
