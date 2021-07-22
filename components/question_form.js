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
      <div className={`${styles["icons__wrapper"]} ${styles["left"]}`}>
        <div className={styles.icons__cont}>
          <div className={`${styles["circle"]} ${styles["red"]}`}></div>
          <div className={`${styles["msg"]}`}></div>
          <div
            className={`${styles["circle"]} ${styles["purple"]} ${styles["sm"]}`}
          ></div>
          <div className={`${styles["circle"]} ${styles["yellow"]}`}></div>
          <div
            className={`${styles["circle"]} ${styles["purple"]} ${styles["big"]}`}
          ></div>
          <div className={`${styles["check"]}`}></div>
          <div
            className={`${styles["circle"]} ${styles["black"]} ${styles["sm"]}`}
          ></div>
        </div>
      </div>
      <div className={`${styles["icons__wrapper"]} ${styles["right"]}`}>
        <div className={styles.icons__cont}>
          <div className={`${styles["check"]} ${styles["sm"]}`}></div>
          <div
            className={`${styles["circle"]} ${styles["black"]} ${styles["big"]}`}
          ></div>
          <div
            className={`${styles["circle"]} ${styles["red"]} ${styles["big"]}`}
          ></div>
          <div
            className={`${styles["circle"]} ${styles["purple"]} ${styles["sm"]}`}
          ></div>
          <div className={`${styles["chat"]}`}></div>
          <div className={`${styles["blueMsg"]}`}></div>
          <div
            className={`${styles["circle"]} ${styles["black"]} ${styles["sm"]}`}
          ></div>
        </div>
      </div>
    </div>
  );
}
