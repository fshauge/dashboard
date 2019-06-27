import React from "react";
import Helmet from "react-helmet";
import useScroll from "../../hooks/useScroll";
import useThemeProperty from "../../hooks/useThemeProperty";
import Dashboard from "../Dashboard";
import StatusBarHighlight from "../StatusBarHighlight";
import styles from "./styles.module.scss";

const App = () => {
  const scroll = useScroll();
  const opacity = Math.max(0, Math.min(1, scroll / 100));
  const background = useThemeProperty("background");

  return (
    <>
      <Helmet>
        <meta name="theme-color" content={background} />
      </Helmet>
      <div className={styles.container}>
        <StatusBarHighlight opacity={opacity} />
        <Dashboard />
      </div>
    </>
  );
};

export default App;
