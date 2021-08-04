import React from "react";
import styles from "../styles/Services.module.scss";
import { TopBanner, PhotoBanner, TrialForm } from "../components/index";

export default function Home() {
  const services = [
    {
      title: "Keeping track of Content. Regulary Updating",
      body: "Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim",
    },
    {
      title: "Unlimited User Groups and Permissions ",
      body: "Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim",
    },
    {
      title: "SEO link Building and Optimizing Tools for your website",
      body: "Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim",
    },
    {
      title:
        "Review website analytics to see how many visitors your site is getting",
      body: "Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim",
    },
  ];
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
  let appDevelopment = [
    {
      title: "Enterprise Management System a wide range of services and",
      body: "Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim",
    },
    {
      title: "Mobile Application Development. A Personal Digital Assistants",
      body: "Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim",
    },
    {
      title: "Desktop App Development. Solutions for eCommerce",
      body: "Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim",
    },
    {
      title: "Software Redevelopment Services",
      body: "Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim",
    },
  ];
  const mapCards = (card) => {
    return (
      <div className={styles.card__cont}>
        <div className={styles.header__cont}>
          <div className={styles.subTxt__cont}>
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
      <div className={styles.contt__wrapper} id={styles.mobile__contt__wrapper}>
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
        <div className={styles.cards__cont} id={styles.mobile__cards__cont}>
          {cards.map((card) => mapCards(card))}
        </div>
      </div>
      <div className={styles.fullService__title__cont}>
        <span>Full-Service Website</span>
        <span>Domain and Hosting</span>
      </div>
      <PhotoBanner
        type="4"
        contents={questions}
        footer="Explore Solutions and Prices"
      />
      <div className={styles.seo__title__cont}>
        <span>Content Management</span>
        <span>SEO Services</span>
      </div>
      <PhotoBanner
        type="4"
        contents={questions}
        direction="reverse"
        footer="Explore Solutions and Prices"
      />
      <div className={styles.fullService__title__cont}>
        <span>Web and Software Development</span>
        <span>Applications and Testing</span>
      </div>
      <PhotoBanner
        type="4"
        contents={appDevelopment}
        footer="Explore Solutions and Prices"
      />
      <TrialForm />
    </div>
  );
}
