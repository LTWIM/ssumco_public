import React from "react";
import styles from "../styles/module_stylesheets/trial_form.module.scss";

export default function TrialForm(props) {
  return (
    <div className={styles.trialForm__wrapper}>
      <div className={styles.contt__cont}>
        <div className={styles.title__cont}>
          <span>Are you ready to start?</span>
        </div>
        <div className={styles.txt__cont}>
          <span>
            Vivamus ultrices bibendum magna, ac volutpat nisi hendrerit eget.
            Aenean rhoncus ultricies semper. Mauris et cursus est. Maecenas
            cursus nibh vel ex faucibus consequat
          </span>
        </div>
        <div className={styles.form__cont}>
          <input
            className={styles.input__cont}
            placeholder="Enter your e-mail"
            type="text"
          />
          <button className={styles.btn__cont}>Get Free Trial</button>
        </div>
        <div className={styles.subText__cont}>
          <span>*  </span>
          <span>
            Aenean rhoncus ultricies semper. Mauris et cursus est. Maecenas
            cursus nibh vel ex faucibus consequat
          </span>
        </div>
      </div>
      <div className={styles.img__cont}></div>
    </div>
  );
}
