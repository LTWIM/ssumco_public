import React from "react";
import styles from "../styles/module_stylesheets/question_form.module.scss";

export default function QuestionForm(props) {
  
  if(props.type === "subscribe1"){
    return(
    <div className={styles.questionForm__wrapper} style={{
      boxShadow: "0 2px 6px 0 rgba(0,0,0,0.26)",
      boxSizing:"border-box",
      border:"30px solid rgba(0,0,0,0)",
      paddingBottom:"60px",
      borderRadius: '12px',
    }}>
      <div className={styles.title__cont}>
        <span>Are you ready to start?</span>
      </div>
      <div className={styles.txt__cont} style={{
        width:"70%",
        maxWidth:"650px"
      }}>
        <span>
          Vivamus ultrices bibendum magna, ac volutpat nisi hendrerit eget. Aenean rhoncus ultricies semper. Mauris et cursus est. Maecenas cursus nibh vel ex faucibus consequat
        </span>
      </div>
      <div className={styles.form__cont} style={{
        flexWrap:'nowrap',
        width:"90%",
        margin:"auto",
        marginBottom:'40px',
        height:'fit-contents',
        // border:'1px solid'
      }}>
        <input
          className={`${styles["input__cont"]} ${styles["sm"]}`}
          placeholder="Enter your e-mail"
          style={{ 
            width:"55%",
            margin:'0'
          }}/>
        <button className={styles.button__cont} style={{
          margin:'0',
          padding: "0",
          width:'40%'
        }} >
          Subscribe for Free Trial Period
        </button>
        
      </div>
      <div className={styles.subText__cont}>
        <span>*</span>
        <span>
          Aenean rhoncus ultricies semper. Mauris et cursus est. Maecenas cursus
          nibh vel ex faucibus consequat
        </span>
      </div>
      
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
    )
  }

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
        <textarea
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
