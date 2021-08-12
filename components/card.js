import React from "react";
import styles from "../styles/module_stylesheets/card.module.scss";

export default function card(props) {
  const mapCard = () => {
    return props.cards.map((card, index) => {
      return (
        <div className={styles.card__cont} key={index}>
          <div className={styles.card__img__cont}>
            <div className={`${styles["background"]} ${styles["color"]}`}></div>
            <div className={`${styles["background"]} ${styles["white"]}`}></div>
            <div className={styles.svg}>{card.svg}</div>
          </div>
          <div className={styles.card__title__cont}>
            <span>{card.title}</span>
          </div>
          <div className={styles.card__txt__cont}>
            <span>{card.txt}</span>
            <span>{card.txt1}</span>
            <span>{card.txt2}</span>
          </div>
        </div>
      );
    });
  };
  return (
    <div className={styles.contt__wrapper}>
      <div className={styles.title__cont}>
        <span>{props.title}</span>
      </div>
      <div className={styles.txt__cont}>
        <span>{props.txt}</span>
      </div>
      <div className={styles.cards__cont}>{mapCard()}</div>
    </div>
  );
}
