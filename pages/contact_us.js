import React from "react";
import Topbanner from "../components/top_banner";
import Card from "../components/card";
import QuestionForm from "../components/question_form";
import styles from "../styles/Contact_us.module.scss";
// import Topbanner, Card, QuestionForm from "../components/index";
import { location, phone, email } from "../components/svg";

export default function Home() {
  let cards = [
    {
      title: "Office Address",
      txt: "74 Highfield Road London NW59 0LU",
      svg: location("", "", "svg__outerLayer"),
    },
    {
      title: "Phone Numbers",
      txt: `+44 20 7946 0380 +44 20 7946 0295`,
      svg: phone("", "", "svg__outerLayer"),
    },
    {
      title: "E-mail & Live Chats",
      txt: "xsaap@emailaddress.fh",
      svg: email("", "", "svg__outerLayer"),
    },
  ];
  return (
    <div className={styles.contactUs__wrapper}>
      <Topbanner title="Contact Us" breadCrumb="Contact" />
      <div className={styles.contactUs__contt__wrapper}>
        <Card
          title="Attention to Every Client"
          txt="Integer mauris ipsum, consequat tincidunt orci eu, consectetur tempus est. Sed posuere sem a convallis maximus. Curabitur consequat dignissim nisl, at efficitur justo"
          cards={cards}
        />
        <div className={styles.map__cont}></div>
        <QuestionForm />
      </div>
    </div>
  );
}
