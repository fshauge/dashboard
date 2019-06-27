import React from "react";
import useScroll from "../../hooks/useScroll";
import useThemeProperty from "../../hooks/useThemeProperty";
import styles from "./styles.module.scss";

const clamp = (value: number, min: number, max: number) =>
  Math.max(0, Math.min(1, value));

const map = (
  value: number,
  min1: number, //a1
  max1: number, //a2
  min2: number, //b1
  max2: number //b2
) => min2 + ((value - min1) * (max2 - min2)) / (max1 - min1);

const StatusBarHighlight = () => {
  const scroll = useScroll();
  const start = parseFloat(useThemeProperty("status-bar-highlight-start"));
  const end = parseFloat(useThemeProperty("status-bar-highlight-end"));
  const opacity = map(clamp(scroll / 100, 0, 1), 0, 1, start, end);

  return <div style={{ opacity }} className={styles.container} />;
};

export default StatusBarHighlight;
