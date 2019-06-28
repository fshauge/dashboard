import React from "react";
import Helmet from "react-helmet";
import useScroll from "../../hooks/useScroll";
import useThemeProperty from "../../hooks/useThemeProperty";
import { clampMap } from "../../number";
import Dashboard from "../Dashboard";
import StatusBarHighlight from "../StatusBarHighlight";
import Toast from "../Toast";
import styles from "./styles.module.scss";

const useStatusBarHighlightOpacity = () => {
  const scroll = useScroll();
  const start = parseFloat(useThemeProperty("status-bar-highlight-start"));
  const end = parseFloat(useThemeProperty("status-bar-highlight-end"));
  return clampMap(scroll / 100, 0, 1, start, end);
};

const App = () => {
  const background = useThemeProperty("background");
  const opacity = useStatusBarHighlightOpacity();

  return (
    <>
      <Helmet>
        <meta name="theme-color" content={background} />
      </Helmet>
      <div className={styles.container}>
        <StatusBarHighlight opacity={opacity} />
        <Toast
          show={false}
          title="Dashboard has been updated"
          description="Press to reload"
        />
        <Dashboard />
      </div>
    </>
  );
};

export default App;
