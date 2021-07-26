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
  const classNameType = () => {
    switch (props.type) {
      case "1":
        return styles.PhotoBanner__cont__type1;
      case "2":
        return styles.PhotoBanner__cont__type2;
      case "3":
        return styles.PhotoBanner__cont__type1;
      case "4":
        return styles.PhotoBanner__cont__type1;
      case "5":
        return styles.PhotoBanner__cont__type3;
      default:
        break;
    }
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
      case"5":
          return(
            <div className={styles.PhotoBanner__textcont} style={{marginTop:'0'}}>
              <div className={styles.PhotoBanner__header1}>{props.header1}</div>
              <div className={styles.PhotoBanner__header2}>{props.header2}</div>
              <div className={styles.PhotoBanner__body}>{props.body}</div>
              <div className={styles.PhotoBanner__type5__cont}>
                <div className={styles.PhotoBanner__type5__col}>
                  <div className={styles.PhotoBanner__type5__num}>
                    {props.templates}
                  </div>
                  <div className={styles.PhotoBanner__type5__text}>
                    Ready to Use Templates
                  </div>
                </div>
                <div className={styles.PhotoBanner__type5__divider}/>
                <div className={styles.PhotoBanner__type5__col}>
                  <div className={styles.PhotoBanner__type5__num}>
                    {props.websites} m
                  </div>
                  <div className={styles.PhotoBanner__type5__text}>
                    Currently Hosted and Supported Websites
                  </div>
                </div>
              </div>
            </div>
          )
      default:
        break;
    }
  };
  return (
    <div className={styles.PhotoBanner}>
      {background()}
      <div className={styles.PhotoBanner__wrapper}>
        <div
          className={classNameType()}
          style={
            props.direction === "reverse"
              ? { flexDirection: "row-reverse" }
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
