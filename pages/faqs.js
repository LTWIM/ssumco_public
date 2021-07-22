import React from "react";
import styles from "../styles/Faqs.module.scss";
import { TopBanner, QuestionForm } from "../components/index";

export default function Home() {
  return (
    <div className={styles.faq__wrapper}>
      <TopBanner title="FAQ" breadCrumb="FAQ" />
      <div className={styles.contt__wrapper}>
        <QuestionForm />
      </div>
    </div>
  );
}
