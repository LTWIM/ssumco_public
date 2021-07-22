import React from "react";
import styles from "../styles/faqs.module.scss";
import Topbanner from "../components/top_banner";
import QuestionForm from "../components/question_form";

export default function Home() {
  return (
    <div className={styles.faq__wrapper}>
      <Topbanner title="FAQ" breadCrumb="FAQ" />
      <div className={styles.contt__wrapper}>
        <QuestionForm />
      </div>
    </div>
  );
}
