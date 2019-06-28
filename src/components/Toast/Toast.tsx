import React, { FC } from "react";
import styles from "./styles.module.scss";

type Props = { show: boolean; title: string; description: string };

const Toast: FC<Props> = ({ show, title, description }) => {
  return (
    <div className={`${styles.container} ${show ? styles.active : ""}`}>
      <div className={styles.box}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Toast;
