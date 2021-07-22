import React from "react";
import Head from "next/head"; // use this for heads/ leave it alone for pages
import Image from "next/image"; // use this for images
import styles from "../styles/Home.module.scss";
import Link from "next/link"; // use this for links
import Card from "../components/card";
import { desktop, pad, drone } from "../components/svg";
import { MainBanner, PhotoBanner, VideoBanner, QuoteBanner, PriceCardBanner } from "../components/index";

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
      companyName: 'JK',
      position:'CEO',
      body:"Vitae nunc sed velit dignissim sodales ut eu. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Etiam sit amet nisl purus. Amet aliquam id diam maecenas ultricies",
      rate:5
    },
    {
      companyName: 'Aleve',
      position:'CEO',
      body:"Vitae nunc sed velit dignissim sodales ut eu. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Etiam sit amet nisl purus. Amet aliquam id diam maecenas ultricies",
      rate:4
    },
    {
      companyName: 'CarMax',
      position:'Dealer',
      body:"Vitae nunc sed velit dignissim sodales ut eu. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Etiam sit amet nisl purus. Amet aliquam id diam maecenas ultricies",
      rate:3
    },
  ]
  return (
    <div className={styles.home__wrapper}>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main> */}
      {/* use this type of  class name the hello_header exists in your style sheet*/}
      {/* <h1 className={styles.hello_header}>HELLO</h1> */}
      {/* this is an example of how to use nested stylinggit remote rm upstream */}
      {/* <div className={styles.shawn}>
          <div className={styles.joy}></div>
        </div>
        <p>
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <footer></footer> */}

      <MainBanner animation={false} />
      <div className={styles.cards__wrapper}> <Card title="Create and Track Content" cards={cards} txt="" /></div>
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
      <PhotoBanner
        direction="reverse"
        type="2"
        header1="How to Choose your SSUM PLAN Plan?"
        contents={contents}
        footer="Ready to choose a pricing plan"
/>
      <QuoteBanner
        contents = {QuoteContents}
      />
      <PriceCardBanner
        header = "Our basic SEO management"
        body = "Aliquam ut porttitor leo a. Diam donec adipiscing tristique risus nec feugiat in. Dui ut ornare lectus sit. Enim sit amet venenatis urna. Enim eu turpis egestas pretium aenean"
      />
    </div>
  );
}
