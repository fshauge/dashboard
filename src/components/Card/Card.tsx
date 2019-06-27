import React, { FC } from "react";
import styles from "./styles.module.scss";

const Card: FC = ({ children }) => (
  <div className={styles.body}>{children}</div>
);

export default Card;
