import React, { FC } from "react";
import styles from "./styles.module.scss";

type Props = { opacity: number };

const StatusBarHighlight: FC<Props> = ({ opacity }) => {
  return <div style={{ opacity }} className={styles.container} />;
};

export default StatusBarHighlight;
