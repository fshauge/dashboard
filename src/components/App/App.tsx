import React from "react";
import useScroll from "../../hooks/useScroll";
import Dashboard from "../Dashboard";
import StatusBarHighlight from "../StatusBarHighlight";
import styles from "./styles.module.scss";

const App = () => {
  const scroll = useScroll();

  return (
    <div className={styles.container}>
      <StatusBarHighlight opacity={scroll / 100} />
      <Dashboard />
    </div>
  );
};

export default App;
