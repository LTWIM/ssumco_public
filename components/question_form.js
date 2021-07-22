import React from "react";
import styles from "../styles/module_stylesheets/question_form.module.scss";

export default function QuestionForm(props) {
  return (
    <div className={styles.questionForm__wrapper}>
      <div className={styles.title__cont}>
        <span>Do you have any Question?</span>
      </div>
      <div className={styles.txt__cont}>
        <span>
          Vivamus ultrices bibendum magna, ac volutpat nisi hendrerit eget.
          Aenean rhoncus ultricies semper. Mauris et cursus est. Maecenas cursus
          nibh vel ex faucibus consequat
        </span>
      </div>
      <div className={styles.form__cont}>
        <input
          className={`${styles["input__cont"]} ${styles["sm"]}`}
          placeholder="Your name"
        />
        <input
          className={`${styles["input__cont"]} ${styles["sm"]}`}
          placeholder="Website"
        />
        <input
          className={`${styles["input__cont"]} ${styles["sm"]}`}
          placeholder="Your e-mail"
        />
        <input
          className={`${styles["input__cont"]} ${styles["sm"]}`}
          placeholder="Subject"
        />
        <input
          className={`${styles["input__cont"]} ${styles["big"]}`}
          placeholder="Your message"
        />
      </div>
      <div className={styles.subText__cont}>
        <span>*</span>
        <span>
           Aenean rhoncus ultricies semper. Mauris et cursus est. Maecenas cursus
          nibh vel ex faucibus consequat
        </span>
      </div>
      <button className={styles.button__cont}>Send</button>
    </div>
  );
}
