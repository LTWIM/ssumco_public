import React from "react";
import styles from "../styles/Prices.module.scss";
import {
  TopBanner,
  PhotoBanner,
  PriceCardBanner,
  QuoteBanner,
} from "../components";
import { ban, check } from "../components/svg";

export default function Home() {
  const QuoteContents = [
    {
      companyName: "JK",
      position: "CEO",
      body: "Vitae nunc sed velit dignissim sodales ut eu. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Etiam sit amet nisl purus. Amet aliquam id diam maecenas ultricies",
      rate: 5,
    },
    {
      companyName: "Aleve",
      position: "CEO",
      body: "Vitae nunc sed velit dignissim sodales ut eu. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Etiam sit amet nisl purus. Amet aliquam id diam maecenas ultricies",
      rate: 4,
    },
    {
      companyName: "CarMax",
      position: "Dealer",
      body: "Vitae nunc sed velit dignissim sodales ut eu. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Etiam sit amet nisl purus. Amet aliquam id diam maecenas ultricies",
      rate: 3,
    },
  ];
  const solutions = [
    {
      title: "Data Sefty and Added Security Services",
      body: "Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros",
    },
    {
      title: "Faster 3x Load Time, CDN and Unlimited Charged Cloud ",
      body: "Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros",
    },
    {
      title: "SEO & eCommerce Tools for all kinds of On-line Store",
      body: "Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros",
    },
    {
      title: "24/7/365 Support",
      body: "Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros",
    },
  ];
  const plans = [
    {
      title: "Use Case and Solutions",
      body: "Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim",
    },
    {
      title: "Budget",
      body: "Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim",
    },
    {
      title: "Number of Users and Work Space",
      body: "Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim",
    },
    {
      title: "Specific Functionality",
      body: "Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim",
    },
  ];
  const features = [
    {
      title: "Features",
      body: [
        {
          title: "One-Click Install",
          body: "Maecenas est arcu, sagittis eget ante semper",
        },
        {
          title: "Websites",
          body: "Maecenas est arcu, sagittis eget ante semper",
        },
        {
          title: "Free Websites and Domain transfers",
          body: "Maecenas est arcu, sagittis eget ante semper",
        },
        {
          title: "Bandwidth and Disk Space",
          body: "Maecenas est arcu, sagittis eget ante semper",
        },
        {
          title: "Postiive SSL upgrade",
          body: "Maecenas est arcu, sagittis eget ante semper",
        },
      ],
    },
    {
      title: "Basic",
      subTitle: "00000",
      body: [
        { title: "ban", body: "" },
        { title: "check", body: "10 Websites" },
        { title: "check", body: "Unlimited" },
        { title: "check", body: "8TB" },
        { title: "check", body: "Unlimited" },
      ],
    },
    {
      title: "Additional",
      subTitle: "00000",
      body: [
        { title: "check", body: "" },
        { title: "check", body: "200 Websites" },
        { title: "check", body: "Unlimited" },
        { title: "check", body: "200TB" },
        { title: "check", body: "Unlimited" },
      ],
    },
    {
      title: "Business",
      subTitle: "00000",
      body: [
        { title: "check", body: "" },
        { title: "check", body: "Unlimited Websites" },
        { title: "check", body: "Unlimited and 24/7 Support" },
        { title: "check", body: "Unlimited" },
        { title: "check", body: "Unlimited" },
      ],
    },
  ];
  const mapList = (list, idx) => {
    return (
      <div className={styles.list__wrapper}>
        <div className={styles.title__cont}>
          <span>{list.title}</span>
          {idx !== 0 && <span>{list.subTitle}</span>}
        </div>
        <div className={styles.contt__cont}>
          {list.body.map((feature, idx) => (
            <div className={styles.list__cont} key={idx}>
              {feature.title !== "ban" && feature.title !== "check" && (
                <span>{feature.title}</span>
              )}
              {feature.title === "ban" &&
                ban("", styles.features__svg, styles.features__svg__outerLayer)}
              {feature.title === "check" &&
                check(
                  "",
                  styles.features__svg,
                  styles.features__svg__outerLayer
                )}
              <span>{feature.body}</span>
            </div>
          ))}
          {idx !== 0 && (
            <button className={styles.btn__cont}>
              <span></span>
            </button>
          )}
        </div>
      </div>
    );
  };
  return (
    <div className={styles.price__wrapper}>
      <TopBanner title="Prices" breadCrumb="Prices" />
      <div className={styles.contt__wrapper}>
        <div className={styles.solutions__title__cont}>
          <span>Digital Innovation at Speed and Cost</span>
          <span>Our Additional Solutions</span>
        </div>
        <PhotoBanner type="4" contents={solutions} />
        <PriceCardBanner
          header="Our Basic and Additional Solutions"
          body="Aliquam ut porttitor leo a. Diam donec adipiscing tristique risus nec feugiat in. Dui ut ornare lectus sit. Enim sit amet venenatis urna. Enim eu turpis egestas pretium aenean"
        />
      </div>
      <PhotoBanner
        direction="reverse"
        type="2"
        header1="How to Choose your Xsaap Plan?"
        contents={plans}
        footer="Ready to choose a pricing plan"
      />
      <div className={styles.solutions__contt__wrapper}>
        <div className={styles.solutions__title__cont}>
          <span>Our Additional Solutions</span>
          <span>
            Aliquam ut porttitor leo a. Diam donec adipiscing tristique risus
            nec feugiat in. Dui ut ornare lectus sit. Enim sit amet venenatis
            urna. Enim eu turpis egestas pretium aenean
          </span>
        </div>
        <div className={styles.solutions__contt__cont}>
          {features.map((feature, idx) => mapList(feature, idx))}
        </div>
      </div>
      <QuoteBanner contents={QuoteContents} />
      <div className={styles.imgs__cont}>
        <div className={styles.img__cont}></div>
        <div className={styles.img__cont}></div>
        <div className={styles.img__cont}></div>
        <div className={styles.img__cont}></div>
        <div className={styles.img__cont}></div>
        <div className={styles.img__cont}></div>
      </div>
    </div>
  );
}
