import React from "react";
import styles from "../styles/Faqs.module.scss";
import { TopBanner, QuestionForm, PhotoBanner } from "../components/index";

export default function Home() {
  const contents = [
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
  let questions = [
    {
      title: "Data Safety and Added Security Services",
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
  return (
    <div className={styles.faq__wrapper}>
      <TopBanner title="FAQ" breadCrumb="FAQ" subTitle="Here is Our "/>
      <div className={styles.questions__title__cont}>
        <span>Easy to get started</span>
        <span>Freqeuntly Asked Questions</span>
      </div>
      <PhotoBanner
        type="7"
        header1="Easy to get started"
        header2="Frequently Asked Questions"
        contents={questions}
      />
      <PhotoBanner
        direction="reverse"
        type="2"
        header1="How to Choose your SSUM PLAN Plan?"
        contents={contents}
        footer="Ready to choose a pricing plan"
      />
      <div className={styles.contt__wrapper}>
        <QuestionForm />
      </div>
    </div>
  );
}
