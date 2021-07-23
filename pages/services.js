import React from "react";
import styles from "../styles/Services.module.scss";
import { TopBanner, PhotoBanner } from "../components/index";

export default function Home() {
  const questions = [
    {
      title: "Domain names. Data Safety and Added Security Services",
      body: "Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim",
    },
    {
      title: "Faster 3x Load Time, CDN and Unlimited Charged Cloud ",
      body: "Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim",
    },
    {
      title: "Data analysis. Automated Restore and Backups",
      body: "Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim",
    },
    {
      title: "24/7/365 Support",
      body: "Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim",
    },
  ];
  let cards = [
    {
      title: "Full-Service Website, Domain and Hosting",
      txt: "Nulla lacus ipsum, tincidunt in dui sit amet, fringilla vehicula tellus. Duis posuere gravida nibh a sollicitudin. Nulla pretium",
      header: "network-wired",
    },
    {
      title: "Content Management with SEO Services",
      txt: "Nulla lacus ipsum, tincidunt in dui sit amet, fringilla vehicula tellus. Duis posuere gravida nibh a sollicitudin. Nulla pretium",
      header: "newspaper",
    },
    {
      title: "Web and Software Development",
      txt: "Nulla lacus ipsum, tincidunt in dui sit amet, fringilla vehicula tellus. Duis posuere gravida nibh a sollicitudin. Nulla pretium",
      header: "code",
    },
  ];
  const mapCards = (card) => {
    return (
      <div className={styles.card__cont}>
        <div className={styles.header__cont}>
          <div className={styles.txt__cont}>
            <span>{card.header}</span>
          </div>
        </div>
        <div className={styles.title__cont}>
          <span>{card.title}</span>
        </div>
        <div className={styles.txt__cont}>
          <span>{card.txt}</span>
        </div>
        <div className={styles.link__cont}>
          <span>Read More</span>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.services__wrapper}>
      <TopBanner title="Services" breadCrumb="Services" />
      <div className={styles.contt__wrapper}>
        <div className={styles.title__cont}>
          <span>Services that Speed Up Success</span>
        </div>
        <div className={styles.text__cont}>
          <span>
            Integer mauris ipsum, consequat tincidunt orci eu, consectetur
            tempus est. Sed posuere sem a convallis maximus. Curabitur consequat
            dignissim nisl, at efficitur justo
          </span>
        </div>
        <div className={styles.cards__cont}>
          {cards.map((card) => mapCards(card))}
        </div>
      </div>
      <div className={styles.fullService__title__cont}>
        <span>Full-Service Website</span>
        <span>Domain and Hosting</span>
      </div>
      <PhotoBanner
        type="4"
        header1="Easy to get started"
        header2="Frequently Asked Questions"
        contents={questions}
      />
    </div>
  );
}
