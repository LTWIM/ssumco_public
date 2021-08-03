import React, { useState } from "react";
import { star } from "./svg";
import styles from "../styles/module_stylesheets/quotebanner.module.scss";
export default function QuoteBanner(props) {
  const [page, Setpage] = useState(0);

  const starColor = (color = "#ffc107") => {
    let count = props.contents[page % props.contents.length].rate;
    let arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(i);
    }
    return (
      <div className={styles.QuoteBanner__star}>
        {arr.map((el) => star("30px", color))}
      </div>
    );
  };
  const pageLimit = () => {
    if (page > 0) {
      Setpage(page - 1);
    }
  };

  const handleChangeLeft = () => {
    if (page !== 0) {
      let nextPage = page - 1;
      Setpage(nextPage);
    } else {
      let nextPage = props.contents.length - 1;
      Setpage(nextPage);
    }
  };
  const handleChangeRight = () => {
    if (page !== props.contents.length - 1) {
      let nextPage = page + 1;
      Setpage(nextPage);
    } else {
      Setpage(0);
    }
  };
  return (
    <div
      className={styles.QuoteBanner}
      style={
        props.backgroundColor
          ? {
              backgroundColor: `${props.backgroundColor}`,
              paddingTop: "100px",
            }
          : {}
      }
    >
      <div className={styles.QuoteBanner__wrapper}>
        <div className={styles.QuoteBanner__cont}>
          <div className={styles.QuoteBanner__top}>
            <div
              className={styles.QuoteBanner__left}
              onClick={() => {
                // pageLimit();
                handleChangeLeft();
              }}
            >
              {page === 0
                ? props.contents[props.contents.length - 1].companyName
                : props.contents[page - 1].companyName}
            </div>
            <div className={styles.QuoteBanner__current}>
              <div className={styles.QuoteBanner__company}>
                {props.contents[page % props.contents.length].companyName}
              </div>
              <div className={styles.QuoteBanner__position}>
                {props.contents[page % props.contents.length].position}
              </div>
            </div>
            <div
              className={styles.QuoteBanner__right}
              onClick={() => {
                handleChangeRight();
              }}
            >
              {page === props.contents.length - 1
                ? props.contents[0].companyName
                : props.contents[page + 1].companyName}
            </div>
          </div>
          <div className={styles.QuoteBanner__bodycont}>
            <div className={styles.QuoteBanner__text}>
              “{props.contents[page % props.contents.length].body}”
            </div>
          </div>
          <div className={styles.QuoteBanner__ratecont}>{starColor()}</div>
        </div>
      </div>
    </div>
  );
}
