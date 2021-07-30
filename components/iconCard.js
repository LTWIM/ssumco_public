import React from "react";
import styles from "../styles/module_stylesheets/iconCard.module.scss";
import { projector, smartPhone, printer, keyboard } from "./svg";

export default function IconCard(props) {
  return (
    <div className={styles.iconCard}>
      <div className={styles.iconCard__icon}>
        <div className={styles.svg__cont}>{props.img}</div>
        <div className={`${styles["background"]} ${styles[props.color]}`}></div>
      </div>
      <div className={styles.iconCard__name}>
        <span>{props.title}</span>
      </div>
      <div
        className={styles.iconCard__dash}
        style={{
          backgroundColor: `${props.color}`,
        }}
      />
      <div className={styles.iconCard__body}>{props.body}</div>
    </div>
  );
}
