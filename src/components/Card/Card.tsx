import React, { FC } from "react";
import styles from "./Card.module.scss";

const Card: FC = ({ children }) => (
  <div className={styles.body}>{children}</div>
);

export default Card;
