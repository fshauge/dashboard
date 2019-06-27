import React from "react";
import Dashboard from "../Dashboard";
import styles from "./App.module.scss";

const App = () => (
  <div className={styles.grid}>
    <div className={styles["status-overlay-container"]} />
    <div className={styles["dashboard-container"]}>
      <Dashboard />
    </div>
  </div>
);

export default App;
