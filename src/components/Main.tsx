import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import useColorScheme from "../hooks/useColorScheme";
import themes from "../themes";
import Dashboard from "./Dashboard";
import GlobalStyle from "./GlobalStyle";
import SafeArea from "./SafeArea";
import StatusBarHighlight from "./StatusBarHighlight";
import ThemeColor from "./ThemeColor";
import Toast from "./Toast";

const Main: FC<{ showToast: boolean; onToastClick: () => void }> = ({
  showToast,
  onToastClick
}) => {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider theme={themes[colorScheme]}>
      <>
        <GlobalStyle />
        <ThemeColor />
        <StatusBarHighlight />
        <Toast
          show={showToast}
          onClick={onToastClick}
          title="Dashboard has been updated"
          description="Press to reload"
        />
        <SafeArea>
          <Dashboard />
        </SafeArea>
      </>
    </ThemeProvider>
  );
};

export default Main;
