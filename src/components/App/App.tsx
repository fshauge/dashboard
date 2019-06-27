import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard";
import styles from "./App.module.scss";

const App = () => {
  const [opacity, setOpacity] = useState(0);

  const handleScroll = () => {
    setOpacity(document.documentElement.scrollTop / 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className={styles.container}>
      <div style={{ opacity }} className={styles.statusOverlay} />
      <Dashboard />
    </div>
  );
};

export default App;
