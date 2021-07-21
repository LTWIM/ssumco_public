import React from "react";
import styles from "../styles/module_stylesheets/top_banner.module.scss";

export default function Topbanner(props) {
  return (
    <div className={styles.contt__wrapper}>
      <div className={styles.contt__cont}>
        <div className={styles.txt__cont}>
          <div className={styles.title__cont}>
            <span>{props.title}</span>
          </div>
          <div className={styles.breadCrumb__cont}>
            <span>Home / Pages / {props.breadCrumb}</span>
          </div>
        </div>
        <div className={styles.img__cont}>
          <div className={`${styles["cube"]} ${styles["sm"]}`}></div>
          <div className={`${styles["chat"]} ${styles["sm"]}`}></div>
          <div className={styles.msg}></div>
          <div
            className={`${styles["circle"]} ${styles["red"]} ${styles["big"]}`}
          ></div>
          <div
            className={`${styles["circle"]} ${styles["blue"]} ${styles["sm"]}`}
          ></div>
          <div
            className={`${styles["circle"]} ${styles["yellow"]} ${styles["big"]}`}
          ></div>
          <div
            className={`${styles["circle"]} ${styles["red"]} ${styles["sm"]}`}
          ></div>
          <div
            className={`${styles["circle"]} ${styles["purple"]} ${styles["big"]}`}
          ></div>
          <div className={`${styles["cube"]} ${styles["sm"]}`}></div>
          <div className={styles.check}></div>
          <div className={`${styles["chat"]} ${styles["big"]}`}></div>
          <div
            className={
              styles["circle"] + " " + styles["purple"] + " " + styles["sm"]
            }
          ></div>
          <div className={`${styles["cube"]} ${styles["big"]}`}></div>
        </div>
      </div>
      <div className={styles.contt__cont__top}></div>
      <div className={styles.contt__cont__bot}></div>
    </div>
  );
}
