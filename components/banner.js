import React from "react";
import styles from "../styles/module_stylesheets/banner.module.scss";
export default function Banner() {
  return (
    <div className={styles.banner__wrapper}>
      <div className={styles.background__top__cont}>
      </div>
      <div className={styles.background__bot__cont}></div>
    </div>
  );
}
