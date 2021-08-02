import React, { Component, useState, useRef, createRef } from "react";
import Head from "next/head"; // use this for heads/ leave it alone for pages
import Image from "next/image"; // use this for images
import styles from "../styles/Home.module.scss";
import Link from "next/link"; // use this for links
// import Card from "../components/card";
// import { desktop, pad, drone } from "../components/svg";
// import { MainBanner, PhotoBanner, VideoBanner, QuoteBanner, PriceCardBanner,QuestionForm } from "../components/index";
import {
  desktop,
  pad,
  drone,
  printer,
  projector,
  keyboard,
  smartPhone,
  check,
} from "../components/svg";
import {
  MainBanner,
  PhotoBanner,
  VideoBanner,
  QuoteBanner,
  PriceCardBanner,
  QuestionForm,
  IconBanner,
  Card,
  IconCard,
  UseBackground,
} from "../components/index";

export default function Home(props) {
  const [blockSelected, setBlockSelected] = useState(null);

  let reference = Array(4)
    .fill(0)
    .map(()=> useRef());

  const componentDidMount = () => {
    window.addEventListener("click",handleEventListener)
    window.scrollTo(0,0)
  }
 
  const componentWillUnmount = () => {
    window.removeEventListener("click", handleEventListener);
  }

  const getOrCreateRef = (index) => {
    if (!reference.hasOwnProperty(index)) {
      reference[index] = createRef();
    }
    return
  };
  const handleEventListener = (e) => {
    if(reference.every((ref)=> !ref.current.contains(e.target))){
      setBlockSelected(null);
    }
  }
  const handleChangeOnBlock = (value) => {
    blockSelected === value
      ? setBlockSelected(null)
      : setBlockSelected(value)
  }
  // props.reference = Array(4)
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
  const cards = [
    {
      title: "Web Content Management",
      txt: "Donec gravida est ut velit fringilla, et venenatis nisi euismod. Aenean est turpis, rhoncus quis scelerisque",
      svg: pad("", "", ""),
    },
    {
      title: "Digital Asset Management",
      txt: "Donec gravida est ut velit fringilla, et venenatis nisi euismod. Aenean est turpis, rhoncus quis scelerisque ac, eleifend quis lorem",
      svg: desktop("", "", ""),
    },
    {
      title: "Headless CMS",
      txt: "Donec gravida est ut velit fringilla, et venenatis nisi euismod. Aenean est turpis, rhoncus quis",
      svg: drone("", "", ""),
    },
  ];
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
  const cardInfo = [
    {
      title: "Publishing",
      body: "Aliquam vestibulum morbi blandit cursus risus at ultrices",
      img: printer("", "", "home__svg__outerLayer"),
      color: "orange",
    },
    {
      title: "Version Controls",
      body: "Aliquam vestibulum morbi blandit cursus risus at ultrices",
      img: projector("", "", "home__svg__outerLayer"),
      color: "red",
    },
    {
      title: "Template Library",
      body: "Aliquam vestibulum morbi blandit cursus risus at ultrices",
      img: smartPhone("", "", "home__svg__outerLayer"),
      color: "blue",
    },
    {
      title: "Automation",
      body: "Aliquam vestibulum morbi blandit cursus risus at ultrices",
      img: keyboard("", "", "home__svg__outerLayer"),
      color: "bisque",
    },
  ];
  const mapTexts = (title, txt) => {
    return (
      <div className={styles.txt__wrapper}>
        <div className={styles.svg__cont}>
          {check("", "", "home__svg__outerLayer")}
        </div>
        <div className={styles.txt__cont}>
          <div className={styles.txt__title__cont}>
            <span>{title}</span>
          </div>
          <div className={styles.txt__txt__cont}>
            <span>{txt}</span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.home__wrapper}>
      <MainBanner animation={false} />
      <div className={styles.cards__wrapper}>
        {" "}
        <Card title="Create and Track Content" cards={cards} txt="" />
      </div>
      <PhotoBanner
        type="1"
        header1="Why work with us"
        header2="for your technical and online needs?"
        body="Aenean elementum, quam in commodo accumsan, neque felis fringilla quam, iaculis euismod purus lorem sagittis turpis. Quisque ut ultricies ex. Fusce dictum consequat ipsum et efficitur. Morbi vitae nibh vitae est venenatis elementum vel ut orci"
      />
      <VideoBanner
        header="Our previous clients"
        body="Aliquam ut porttitor leo a. Diam donec adipiscing tristique risus nec feugiat in. Dui ut ornare lectus sit. Enim sit amet venenatis urna. Enim eu turpis egestas pretium aenean"
      />
      <div className={styles.home__icons__wrapper}>
        <div
          className={styles.contt__wrapper}
          id={styles.mobile__contt__wrapper}
        >
          <div className={styles.icons__contt__cont}>
            <div className={styles.title__cont}>
              <span>Your business,</span>
            </div>
            <div className={styles.subTxt__cont}>
              <span>
                Sed libero enim sed faucibus turpis in. Turpis massa sed
                elementum tempus egestas sed sed
              </span>
            </div>
            {mapTexts(
              "User Groups and Permissions",
              "Ultrices dui sapien eget mi proin. Aliquam malesuada bibendum arcu vitae elementum curabitur"
            )}
            {mapTexts(
              "Integration with Existing Software",
              "Aliquam malesuada bibendum arcu vitae elementum curabitur. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus"
            )}
            {mapTexts(
              "Format and Indexing Management",
              "Malesuada bibendum arcu vitae elementum curabitur. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus"
            )}
          </div>
          <div className={styles.icons__cards__wrapper}>
            <div className={styles.icons__cards__cont}>
              <IconCard {...cardInfo[0]} />
              <IconCard {...cardInfo[1]} />
            </div>
            <div className={styles.icons__cards__cont}>
              <IconCard {...cardInfo[2]} />
              <IconCard {...cardInfo[3]} />
            </div>
          </div>
        </div>
      </div>
      <PhotoBanner
        direction="reverse"
        type="2"
        header1="How to Choose your SSUM PLAN Plan?"
        contents={contents}
        footer="Ready to choose a pricing plan"
        selected={blockSelected}
        // value={index}
        // blockref={getOrCreateRef(index)}
        onChange={handleChangeOnBlock}
      />
      <QuoteBanner contents={QuoteContents} />
      <PriceCardBanner
        header="Our basic SEO management"
        body="Aliquam ut porttitor leo a. Diam donec adipiscing tristique risus nec feugiat in. Dui ut ornare lectus sit. Enim sit amet venenatis urna. Enim eu turpis egestas pretium aenean"
      />
      <div className={styles.home__wrapper__Questionform}>
        <QuestionForm type="subscribe1" />
      </div>
    </div>
  );
}
