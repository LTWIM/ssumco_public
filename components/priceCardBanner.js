import React from "react";
import styles from "../styles/module_stylesheets/priceCardBanner.module.scss";
import { check } from "../components/svg";

export default function PriceCardBanner(props) {
  const cardInfo = [
    {
      tier: "Starter",
      price: "000",
      checks: [
        "Starting at 3 Users",
        "20 Work Spaces",
        "2 Gb Max File Size",
        "1 TB Storage",
        "Custom Branding Services",
      ],
    },
    {
      tier: "Professional",
      price: "000000",
      checks: [
        "Starting at 3 Users",
        "50 Work Spaces",
        "5 Gb Max File Size",
        "1 TB Storage",
        "Custom Branding Services",
      ],
    },
    {
      tier: "Enterprise",
      price: "000000",
      checks: [
        "Unlimited Users",
        "100 Work Spaces",
        "20 Gb Max File Size",
        "20 TB Storage",
        "Custom Branding Services",
      ],
    },
  ];

  const card = (info) => {
    const checklist = (list) => {
      return (
        <div className={styles.PriceCardBanner__checklist}>
          <div className={styles.PriceCardBanner__check}>
            {check("", "", "priceCardBanner__svg__outerLayer")}
          </div>
          <div className={styles.PriceCardBanner__list}>{list}</div>
        </div>
      );
    };
    return (
      <div className={styles.PriceCardBanner__card}>
        <div className={styles.PriceCardBanner__card__tier}>{info.tier}</div>
        <div className={styles.PriceCardBanner__card__dashSmall} />
        <div className={styles.PriceCardBanner__card__price}>{info.price}$</div>
        <div className={styles.PriceCardBanner__card__per}>per month</div>
        <div className={styles.PriceCardBanner__card__dashBig} />
        <div className={styles.PriceCardBanner__card__checkcont}>
          {info.checks.map((list) => checklist(list))}
        </div>
        <div className={styles.PriceCardBanner__subscribe}>Subscribe</div>
      </div>
    );
  };

  return (
    <div className={styles.PriceCardBanner}>
      <div className={styles.PriceCardBanner__cont}>
        <div className={styles.PriceCardBanner__header}>{props.header}</div>
        <div className={styles.PriceCardBanner__body}>{props.body}</div>
        <div className={styles.PriceCardBanner__cardcont}>
          {cardInfo.map((info) => card(info))}
        </div>
      </div>
    </div>
  );
}
