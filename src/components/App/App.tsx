import React from "react";
import Helmet from "react-helmet";
import useThemeProperty from "../../hooks/useThemeProperty";
import Dashboard from "../Dashboard";
import StatusBarHighlight from "../StatusBarHighlight";
import styles from "./styles.module.scss";

const App = () => {
  const background = useThemeProperty("background");

  return (
    <>
      <Helmet>
        <meta name="theme-color" content={background} />
      </Helmet>
      <div className={styles.container}>
        <StatusBarHighlight />
        <Dashboard />
      </div>
    </>
  );
};

export default App;
