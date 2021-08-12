import React from "react";
import styles from "../styles/module_stylesheets/blog_card.module.scss";

export default function BlogCard(props) {
  let cards = [
    {
      date: "September 18,2020",
      author: "C. Geordson",
      img: "",
      title: "Keeping track of content and regulary updating",
      txt: "Curabitur cursus turpis magna, sit amet consequat leo suscipit eu. Aenean eu lectus quam. Vestibulum ante",
    },
    {
      date: "September 18,2020",
      author: "C. Geordson",
      img: "",
      title: "A Powerful Formula For Full Service ",
      txt: "Aliquam interdum ornare quam, id interdum leo accumsan sed. Aenean blandit lacus at massa aliquamo  ",
    },
    {
      date: "September 18,2020",
      author: "C. Geordson",
      img: "",
      title: "Solutions to B2B sales. Ready-to-Use techology",
      txt: "Curabitur cursus turpis magna, sit amet consequat leo suscipit eu. Aenean eu lectus quam. Vestibulum ante",
    },
  ];
  const mapCards = (card, index) => {
    return (
      <div
        className={styles.card__cont}
        id={styles.mobile__card__cont}
        key={index}
      >
        <div className={styles.img__cont}></div>
        <div className={styles.contt__cont}>
          <div className={styles.date__cont}>
            <span>{`${card.date} / by ${card.author}`}</span>
          </div>
          <div className={styles.card__title__cont}>
            <span>{card.title}</span>
          </div>
          <div className={styles.card__txt__cont}>
            <span>{card.txt}</span>
          </div>
          <span className={styles.link__cont}>Read more</span>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.blogCard__wrapper}>
      <div className={styles.title__cont}>
        <span>Tips and Tricks from our Blog</span>
      </div>
      <div className={styles.cards__cont}>
        {cards.map((card,index) => mapCards(card, index))}
      </div>
    </div>
  );
}
