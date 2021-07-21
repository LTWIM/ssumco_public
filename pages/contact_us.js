import React from "react";
import Topbanner from "../components/top_banner";
import Card from "../components/card";
import styles from "../styles/Contact_us.module.scss";

export default function Home() {
  return (
    <div className={styles.contactUs__wrapper}>
      <Topbanner title="Contact Us" breadCrumb="Contact" />
      <div className={styles.contt__wrapper}>
        <Card />
      </div>
    </div>
  );
}
