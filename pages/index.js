import React from "react";
import Head from "next/head"; // use this for heads/ leave it alone for pages
import Image from "next/image"; // use this for images
import styles from "../styles/Home.module.scss";
import Link from "next/link"; // use this for links
import { MainBanner, PhotoBanner } from "../components/index";

export default function Home() {
  const contents = [
    {
      title : "Use Case and Solutions",
      body: "Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim"
    },
    {
      title : "Budget",
      body: "Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim"
    },
    {
      title : "Number of Users and Work Space",
      body: "Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim"
    },
    {
      title : "Specific Functionality",
      body: "Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim"
    }
  ]
  return (
    <div>
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

      <MainBanner animation = {false} />
      <PhotoBanner 
        type = '1'
        header1 = 'Why work with us'
        header2 = 'for your technical and online needs?'
        body = 'Aenean elementum, quam in commodo accumsan, neque felis fringilla quam, iaculis euismod purus lorem sagittis turpis. Quisque ut ultricies ex. Fusce dictum consequat ipsum et efficitur. Morbi vitae nibh vitae est venenatis elementum vel ut orci'
      />

      <PhotoBanner 
        direction = "reverse"
        type = '2'
        header1 = 'How to Choose your SSUM PLAN Plan?'
        contents = {contents}
        footer = "Ready to choose a pricing plan"
      />
    </div>
  );
}
