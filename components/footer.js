import React from "react";
import styles from "../styles/module_stylesheets/footer.module.scss";
import {
  instagram,
  youtube,
  twitter,
  facebook,
  linkedIn,
  envelope,
  phone2,
} from "../components/svg";

export default function Footer() {
  const mapList = (info) => {
    return (
      <div className={styles.contt__cont}>
        <span>-{info}</span>
      </div>
    );
  };
  return (
    <div className={styles.footer__wrapper}>
      <div className={styles.footer__background1} style={{
        backgroundImage:`URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/footer/footer1.png")`
      }}/>
            <div className={styles.footer__background2} style={{
        backgroundImage:`URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/footer/footer2.png")`
      }}/>
      <div className={styles.footer__contt__cont}>
        <div className={styles.contacts__cont}>
          <div className={styles.title__cont}>
            <span>SSUMCO</span>
          </div>
          <div className={styles.txt__cont}>
            <span>
              Aliquam rhoncus nunc turpis, sit amet malesuada elit dignissim
              vel. Nullam sed nunc ut nibh vestibulum mattis. Sed sed laoreet
              turpisF
            </span>
          </div>
          <div className={styles.phone__cont}>
            {phone2("#3b00ad", "", styles.contacts__svg__outerLayer)}
            <span>234-456-9696</span>
          </div>
          <div className={styles.email__cont}>
            {envelope("#3b00ad", "", styles.contacts__svg__outerLayer)}
            <span>ssumco@email.com</span>
          </div>
          <div className={styles.social__cont}>
            {instagram("", "", styles.social__svg__outerLayer)}
            {youtube("", "", styles.social__svg__outerLayer)}
            {twitter("", "", styles.social__svg__outerLayer)}
            {linkedIn("", "", styles.social__svg__outerLayer)}
            {facebook("", "", styles.social__svg__outerLayer)}
          </div>
        </div>
        <div className={styles.infos__cont}>
          <div className={styles.title__cont}>
            <span>Info:</span>
          </div>
          {mapList("Services")}
          {mapList("Prices")}
          {mapList("FAQ")}
          {mapList("Team and Careers")}
        </div>
        <div className={styles.infos__cont}>
          <div className={styles.title__cont}>
            <span>About Us:</span>
          </div>
          {mapList("Home")}
          {mapList("About")}
          {mapList("Contact Us")}
          {mapList("Blog")}
        </div>
      </div>
    </div>
  );
}
