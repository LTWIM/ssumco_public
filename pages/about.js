import React from "react";
import styles from "../styles/About.module.scss";
import {
  TopBanner,
  IconBanner,
  PhotoBanner,
  TeamBanner,
  VideoBanner,
  QuoteBanner,
  BlogCard,
  WavyBanner,
} from "../components/index";
import { securityCam, research, pad, keyboard } from "../components/svg";

export default function Home() {
  const cardInfo = [
    {
      title: "Security",
      color: "orange",
      body: "Aliquam vestibulum morbi blandit cursus risus at ultrices",
      img: securityCam("", "", "about__svg__outerLayer"),
    },
    {
      title: "Version Controls",
      color: "blue",
      body: "Aliquam vestibulum morbi blandit cursus risus at ultrices",
      img: pad("", "", "about__svg__outerLayer"),
    },
    {
      title: "Research",
      color: "red",
      body: "Aliquam vestibulum morbi blandit cursus risus at ultrices",
      img: research("", "", "about__svg__outerLayer"),
    },
    {
      title: "Automation",
      color: "bisque",
      body: "Aliquam vestibulum morbi blandit cursus risus at ultrices",
      img: keyboard("", "", "about__svg__outerLayer"),
    },
  ];
  const memberInfo = [
    {
      name: "Joy Lee",
      position: "Front end developer",
      detail:
        "Donec pharetra nec diam in pharetra. Maecenas in metus dui. Vestibulum vestibulum lacinia mi. Vivamus massa dui",
      photo: "",
    },
    {
      name: "Paul Choi",
      position: "CEO",
      detail:
        "Nulla lacus ipsum, tincidunt in dui sit amet, fringilla vehicula tellus. Duis posuere gravida nibh a sollicitudin. Nulla pretium",
      photo: "",
    },
    {
      name: "Shawn Lee",
      position: "Full stack developer",
      detail:
        "Aenean dui arcu, porttitor vel orci id, euismod commodo sem. Aliquam rutrum ultricies orci",
      photo: "",
    },
  ];
  const videolist = [
    "video1",
    "video2",
    "video3",
    "video4",
    "video5",
    "video6",
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
  return (
    <div className={styles.About}>
      <TopBanner
        title="About Us"
        breadCrumb="About"
        pages={false}
        subTitle="Who We Are"
      />
      <IconBanner
        cardinfo={cardInfo}
        title="Strategic Innovations That Matters"
        body="Anteger mauris ipsum, consequat tincidunt orci eu, consectetur tempus est. Sed posuere sem a convallis maximus. Curabitur consequat dignissim nisl, at efficitur justo"
      />
      <PhotoBanner
        type="5"
        direction="reverse"
        header1="Advanced features"
        body="Maecenas est arcu, sagittis eget ante semper, ornare rhoncus tellus. In ac arcu at velit sollicitudin ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam eu euismod quam. Vivamus commodo hendrerit est, sed vestibulum quam mollis semper. Etiam tristique rutrum lectus a consequat. Praesent tristique cursus tellus, in ultricies"
        templates={350}
        websites={1.9}
      />
      <TeamBanner
        header="Our Forward Thinkers"
        body="Front end developer"
        member={memberInfo}
      />
      <PhotoBanner
        type="6"
        header1="Join Our Community"
        body="Aenean elementum, quam in commodo accumsan, neque felis fringilla quam, iaculis euismod purus lorem sagittis turpis. Quisque ut ultricies ex. Fusce dictum consequat ipsum et efficitur. Morbi vitae nibh vitae est venenatis elementum vel ut orci"
      />
      <VideoBanner
        header="Attention to Every Client’s Succes"
        body="Integer mauris ipsum, consequat tincidunt orci eu, consectetur tempus est. Sed posuere sem a convallis maximus. Curabitur consequat dignissim nisl, at efficitur justo"
        slideShow={videolist}
      />
      <QuoteBanner contents={QuoteContents} backgroundColor="#edf0ff" />
      <BlogCard />
      <WavyBanner type="1" />
    </div>
  );
}
