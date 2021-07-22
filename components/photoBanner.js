import React, { createRef } from "react";
import styles from "../styles/module_stylesheets/photobanner.module.scss";
export default function PhotoBanner(props) {
  const block = (content) => {
    return (
      <div className={styles.PhotoBanner__block}>
        {content.title}
        <div className={styles.PhotoBanner__block__body}>
          {content.body}
          {props.type === "4" && <span>Learn More</span>}
        </div>
      </div>
    );
  };

  const background = () => {
    switch (props.type) {
      case "1":
        return (
          <div className={styles.PhotoBanner__background}>
            <div
              className={styles.PhotoBanner__vawe2}
              style={{
                backgroundImage: `URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/photobanner/vawe2.png")`,
              }}
            />
            <div
              className={styles.PhotoBanner__vawe1}
              style={{
                backgroundImage: `URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/photobanner/vawe1.png")`,
              }}
            />
          </div>
        );
      case "2":
        return (
          <div className={styles.PhotoBanner__backgroundbg}>
            <div
              className={styles.PhotoBanner__bg}
              style={{
                backgroundImage: `URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/photobanner/bg.png")`,
              }}
            />
            <div
              className={styles.PhotoBanner__bg}
              style={{
                backgroundImage: `URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/photobanner/bg.png")`,
                left: "1044px",
                top: "195px",
                height: "550px",
              }}
            />
          </div>
        );
      case "3":
        return (
          <div className={styles.PhotoBanner__backgroundbg}>
            <div
              className={styles.PhotoBanner__bg}
              style={{
                backgroundImage: `URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/photobanner/bg.png")`,
              }}
            />
            <div
              className={styles.PhotoBanner__bg}
              style={{
                backgroundImage: `URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/photobanner/bg.png")`,
                left: "1044px",
                top: "195px",
                height: "550px",
              }}
            />
          </div>
        );
      default:
        break;
    }
  };
  const typeHandle = () => {
    switch (props.type) {
      case "1":
        return (
          <div className={styles.PhotoBanner__textcont}>
            <div className={styles.PhotoBanner__header1}>{props.header1}</div>
            <div className={styles.PhotoBanner__header2}>{props.header2}</div>
            <div className={styles.PhotoBanner__body}>{props.body}</div>
            <div className={styles.PhotoBanner__btn}>Read more</div>
          </div>
        );
      case "2":
        return (
          <div className={styles.PhotoBanner__blockcont}>
            <div className={styles.PhotoBanner__header1}>{props.header1}</div>
            <div className={styles.PhotoBanner__blockWrapper}>
              {props.contents.map((content) => block(content))}
            </div>
            <div className={styles.PhotoBanner__footer}>{props.footer}</div>
          </div>
        );
      case "3":
        return (
          <div className={styles.PhotoBanner__textcont}>
            <div className={styles.PhotoBanner__header1}>{props.header1}</div>
            <div className={styles.PhotoBanner__header2}>{props.header2}</div>
            <div className={styles.PhotoBanner__body}>{props.body}</div>
            <div className={`${styles.PhotoBanner__btn} ${styles.orange}`}>
              View Details
            </div>
          </div>
        );
      case "4":
        return (
          <div className={`${styles.PhotoBanner__blockcont} ${styles.type4}`}>
            <div className={styles.PhotoBanner__blockWrapper}>
              {props.contents.map((content) => block(content))}
            </div>
            <div className={styles.PhotoBanner__footer}>{props.footer}</div>
          </div>
        );
      default:
        break;
    }
  };

  return (
    <div className={styles.PhotoBanner}>
      {background()}
      <div className={styles.PhotoBanner__wrapper}>
        <div
          className={styles.PhotoBanner__cont}
          style={
            props.direction === "reverse"
              ? {
                  flexDirection: "row-reverse",
                }
              : {}
          }
        >
          <div
            className={styles.PhotoBanner__photo}
            style={
              props.type === 1
                ? {
                    marginBottom: "0",
                  }
                : {}
            }
          ></div>
          {typeHandle()}
        </div>
      </div>
    </div>
  );
}
