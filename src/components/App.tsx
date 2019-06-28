import React, { FC, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import useColorScheme from "../hooks/useColorScheme";
import useServiceWorker from "../hooks/useServiceWorker";
import themes from "../themes";
import Dashboard from "./Dashboard";
import GlobalStyle from "./GlobalStyle";
import SafeArea from "./SafeArea";
import { Spinner } from "./Spinner";
import StatusBarHighlight from "./StatusBarHighlight";
import ThemeColor from "./ThemeColor";
import Toast from "./Toast";

const App: FC = () => {
  const [waiting, skipWaiting] = useServiceWorker();
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider theme={themes[colorScheme]}>
      <>
        <GlobalStyle />
        <ThemeColor />
        <StatusBarHighlight />
        <Toast
          show={waiting}
          onClick={skipWaiting}
          title="Dashboard has been updated"
          description="Press to reload"
        />
        <SafeArea>
          <Suspense fallback={<Spinner />}>
            <Dashboard />
          </Suspense>
        </SafeArea>
      </>
    </ThemeProvider>
  );
};

export default App;
