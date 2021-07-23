import React from "react";
import { TopBanner, PhotoBanner, TrialForm } from "../components/index";
import styles from "../styles/Cases.module.scss";

export default function Home() {
  let stats = [
    { num: "350", txt: "Ready to Use Applications" },
    { num: "+ 1.9 m", txt: "Currently Hosted and Supported Websites" },
    { num: "7820", txt: "Extensive B2B Ecommerce Cases" },
  ];
  let cards = [
    {
      img: "",
      title: "Consequat id porta Case",
      txt: "Malesuada bibendum arcu vitae elementum curabitur vitae. Quis enim lobortis scelerisque fermentum dui faucibus. In tellus integer feugiat scelerisque varius",
    },
    {
      img: "",
      title: "Consequat id porta Case",
      txt: "Malesuada bibendum arcu vitae elementum curabitur vitae. Quis enim lobortis scelerisque fermentum dui faucibus. In tellus integer feugiat scelerisque varius",
    },
    {
      img: "",
      title: "Consequat id porta Case",
      txt: "Malesuada bibendum arcu vitae elementum curabitur vitae. Quis enim lobortis scelerisque fermentum dui faucibus. In tellus integer feugiat scelerisque varius",
    },
    {
      img: "",
      title: "Consequat id porta Case",
      txt: "Malesuada bibendum arcu vitae elementum curabitur vitae. Quis enim lobortis scelerisque fermentum dui faucibus. In tellus integer feugiat scelerisque varius",
    },
    {
      img: "",
      title: "Consequat id porta Case",
      txt: "Malesuada bibendum arcu vitae elementum curabitur vitae. Quis enim lobortis scelerisque fermentum dui faucibus. In tellus integer feugiat scelerisque varius",
    },
    {
      img: "",
      title: "Consequat id porta Case",
      txt: "Malesuada bibendum arcu vitae elementum curabitur vitae. Quis enim lobortis scelerisque fermentum dui faucibus. In tellus integer feugiat scelerisque varius",
    },
    {
      img: "",
      title: "Consequat id porta Case",
      txt: "Malesuada bibendum arcu vitae elementum curabitur vitae. Quis enim lobortis scelerisque fermentum dui faucibus. In tellus integer feugiat scelerisque varius",
    },
    {
      img: "",
      title: "Consequat id porta Case",
      txt: "Malesuada bibendum arcu vitae elementum curabitur vitae. Quis enim lobortis scelerisque fermentum dui faucibus. In tellus integer feugiat scelerisque varius",
    },
    {
      img: "",
      title: "Consequat id porta Case",
      txt: "Malesuada bibendum arcu vitae elementum curabitur vitae. Quis enim lobortis scelerisque fermentum dui faucibus. In tellus integer feugiat scelerisque varius",
    },
    {
      img: "",
      title: "Consequat id porta Case",
      txt: "Malesuada bibendum arcu vitae elementum curabitur vitae. Quis enim lobortis scelerisque fermentum dui faucibus. In tellus integer feugiat scelerisque varius",
    },
    {
      img: "",
      title: "Consequat id porta Case",
      txt: "Malesuada bibendum arcu vitae elementum curabitur vitae. Quis enim lobortis scelerisque fermentum dui faucibus. In tellus integer feugiat scelerisque varius",
    },
    {
      img: "",
      title: "Consequat id porta Case",
      txt: "Malesuada bibendum arcu vitae elementum curabitur vitae. Quis enim lobortis scelerisque fermentum dui faucibus. In tellus integer feugiat scelerisque varius",
    },
    {
      img: "",
      title: "Consequat id porta Case",
      txt: "Malesuada bibendum arcu vitae elementum curabitur vitae. Quis enim lobortis scelerisque fermentum dui faucibus. In tellus integer feugiat scelerisque varius",
    },
    {
      img: "",
      title: "Consequat id porta Case",
      txt: "Malesuada bibendum arcu vitae elementum curabitur vitae. Quis enim lobortis scelerisque fermentum dui faucibus. In tellus integer feugiat scelerisque varius",
    },
    {
      img: "",
      title: "Consequat id porta Case",
      txt: "Malesuada bibendum arcu vitae elementum curabitur vitae. Quis enim lobortis scelerisque fermentum dui faucibus. In tellus integer feugiat scelerisque varius",
    },
    {
      img: "",
      title: "Consequat id porta Case",
      txt: "Malesuada bibendum arcu vitae elementum curabitur vitae. Quis enim lobortis scelerisque fermentum dui faucibus. In tellus integer feugiat scelerisque varius",
    },
  ];
  const mapStat = (stat) => {
    return (
      <div className={styles.stat__cont}>
        <div className={styles.num__cont}>
          <span>{stat.num}</span>
        </div>
        <div className={styles.subText__cont}>{stat.txt}</div>
      </div>
    );
  };

  const mapCard = (card) => {
    return (
      <div className={styles.card__cont}>
        <div className={styles.card__inner__cont}>
          <div className={styles.card__front__cont}></div>
          <div className={styles.card__back__cont}>
            <div className={styles.card__img__cont}></div>
            <div className={styles.card__txt__cont}>
              <span>{card.title}</span>
              <span>{card.txt}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.page__wrapper}>
      <TopBanner title="Cases" breadCrumb="Cases" />
      <div className={styles.contt__wrapper}>
        <div className={styles.title__cont}>
          <span>Complete Web Solutions</span>
        </div>
        <div className={styles.txt__cont}>
          <span>
            Integer mauris ipsum, consequat tincidunt orci eu, consectetur
            tempus est. Sed posuere sem a convallis maximus. Curabitur consequat
            dignissim nisl, at efficitur justo
          </span>
        </div>
        <div className={styles.stats__cont}>
          {stats.map((stat) => mapStat(stat))}
        </div>
      </div>
      <div className={styles.cards__cont}>
        {cards.map((card) => mapCard(card))}
      </div>
      <PhotoBanner
        type="3"
        direction="reverse"
        header1="Our traffic for 2020"
        body="Maecenas est arcu, sagittis eget ante semper, ornare rhoncus tellus. In ac arcu at velit sollicitudin ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam eu euismod quam. Vivamus commodo hendrerit est, sed vestibulum quam mollis semper. Etiam tristique rutrum lectus a consequat. Praesent tristique cursus tellus, in ultricies"
      />
      <PhotoBanner
        type="1"
        header1={
          <span>
            Why You Use a{" "}
            <span style={{ color: "#ff3d00" }}>Enterprise Pricing Plan?</span>
          </span>
        }
        body="Aenean elementum, quam in commodo accumsan, neque felis fringilla quam, iaculis euismod purus lorem sagittis turpis. Quisque ut ultricies ex. Fusce dictum consequat ipsum et efficitur. Morbi vitae nibh vitae est venenatis elementum vel ut orci"
      />
      <TrialForm />
    </div>
  );
}
