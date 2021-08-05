import React from "react";
import styles from "../styles/module_stylesheets/wavyBanner.module.scss";

export default function WavyBanner(props) {
  const renderContents = () => {
    if (props.type === "1") {
      return (
        <div
          className={`${styles.contt__wrapper} ${styles.row}`}
          id={styles.mobile__wavyBanner__row}
        >
          <div className={styles.wave__left}/>
          <div className={styles.wave__right}/>

          <div className={styles.contt__cont}>
            <div className={styles.title__cont}>
              <span>Want to be part of the team?</span>
            </div>
            <div className={styles.txt__cont}>
              <span>
                Tincidunt eget nullam non nisi est sit amet facilisis. Eget
                egestas purus viverra accumsan in nisl nisi
              </span>
            </div>
            <div className={styles.link__cont}>
              <span>Careers</span>
            </div>
            <div className={styles.link__cont}>
              <span>hrxsaapemal@emaiaddress.fh</span>
            </div>
          </div>
          <div className={styles.contt__cont}>
            <div className={styles.title__cont}>
              <span>Information for Strategic Investors</span>
            </div>
            <div className={styles.txt__cont}>
              <span>
                -Erat pellentesque adipiscing commodo elit at imperdiet dui
                accumsan sit. Nisl pretium fusce id velit ut tortor pretium
                viverra
              </span>
            </div>
            <div className={styles.txt__cont}>
              <span>
                -Nisl pretium fusce id velit ut tortor pretium viverra
              </span>
            </div>
            <div className={styles.link__cont}>
              <span>- Contact Us</span>
            </div>
          </div>
        </div>
      );
    } else if (props.type === "2") {
      return (
        <div
          className={`${styles.contt__wrapper} ${styles.col}`}
          id={styles.mobile__wavyBanner__col}
        >
          <div className={styles.wave__left}/>
          <div className={styles.wave__right}/>
          
          <div className={styles.title__cont}>
            <span>One click Install</span>
          </div>
          <div className={styles.txt__cont}>
            <span>
              Easy, Secure and Fast Solutions for Web-Site Development
            </span>
          </div>
          <div className={styles.contt__cont}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={styles.link__cont}>
            <span>Check out more of our webhosted solutions</span>
          </div>
        </div>
      );
    }
  };
  return <div className={styles.wavyBanner__wrapper}>{renderContents()}</div>;
}
