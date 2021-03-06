import React, { useEffect } from "react";
import styles from "../styles/module_stylesheets/top_banner.module.scss";

export default function Topbanner(props) {
  const pageConfig = () => {
    if (props.pages === false) {
      return <span>Home / {props.breadCrumb}</span>;
    }
    return <span>Home / Pages / {props.breadCrumb}</span>;
  };
  useEffect(() => {
    if (window.innerWidth < 540) {
      setTimeout(function () {
        window.scrollTo({ top: window.innerHeight - 75, behavior: "smooth" });
      }, 2200);
    }
  }, []);

  return (
    <div className={styles.contt__wrapper}>
      <div className={styles.contt__cont}>
        <div className={styles.txt__cont}>
          <div className={styles.title__cont}>
            <span>{props.title}</span>
            <div className={styles.mobile__title__cont}>
              <span>{props.subTitle}</span>
              <span>{props.title}</span>
            </div>
          </div>
          <div className={styles.breadCrumb__cont}>{pageConfig()}</div>
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
