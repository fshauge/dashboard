import React from "react";
import useScroll from "../../hooks/useScroll";
import Dashboard from "../Dashboard";
import StatusBarHighlight from "../StatusBarHighlight";
import ThemeColor from "../ThemeColor";
import styles from "./styles.module.scss";

const App = () => {
  const scroll = useScroll();
  const opacity = Math.max(0, Math.min(1, scroll / 100));

  return (
    <div className={styles.container}>
      <ThemeColor />
      <StatusBarHighlight opacity={opacity} />
      <Dashboard />
    </div>
  );
};

export default App;
