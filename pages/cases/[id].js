import React from "react";
import { TopBanner, BlogCard } from "../../components/index";
import styles from "../../styles/Cases_single.module.scss";

export default function Home(props) {
  let client = {
    name: "JK Construction",
    date: "January-March, 2020",
    website: "jksomething.com",
    services:
      "Data Analysis, SEO Optimization, Redevelopment Custom Applications, Traffic Tracking, Optimization Delyvery Zones",
    review:
      "“Vitae nunc sed velit dignissim sodales ut eu. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Etiam sit amet nisl purus. Amet aliquam id diam maecenas ultricies”",
  };
  return (
    <div className={styles.case__wrapper}>
      <TopBanner title="Case Details" breadCrumb="Case Detail" />
      <div className={styles.contt__wrapper}>
        <div className={styles.detail__imgs__cont}>
          <div className={styles.img__cont}></div>
          <div className={styles.img__cont}></div>
          <div className={styles.img__cont}></div>
        </div>
        <div className={styles.detail__contt__cont}>
          <div className={styles.title__cont}>
            <span>Traffic analysis for International Target Sales</span>
          </div>
          <div className={styles.txt__cont}>
            <span>
              Malesuada bibendum arcu vitae elementum curabitur vitae. Quis enim
              lobortis scelerisque fermentum dui faucibus. In tellus integer
              feugiat scelerisque varius. Eget mi proin sed libero enim sed
              faucibus turpis. Nunc aliquet bibendum enim facilisis gravida
              neque convallis
            </span>
          </div>
          <div className={styles.description__cont}>
            <div>Client:</div>
            <span>{client.name}</span>
          </div>
          <div className={styles.description__cont}>
            <div>Date:</div>
            <span>{client.date}</span>
          </div>
          <div className={styles.description__cont}>
            <div>Website:</div>
            <span>{client.website}</span>
          </div>
          <div className={styles.description__cont}>
            <div>Services:</div>
            <span>{client.services}</span>
          </div>
          <div className={styles.description__cont}>
            <div>Client Review:</div>
            <span>{client.review}</span>
          </div>
        </div>
      </div>
      <div className={styles.cases__cont}>
        <div className={styles.title__cont}>
          <span>Recent Cases</span>
        </div>
        <div className={styles.contt__cont}>
          <div className={styles.case__cont}></div>
          <div className={styles.case__cont}></div>
          <div className={styles.case__cont}></div>
          <div className={styles.case__cont}></div>
        </div>
      </div>
      <BlogCard />
    </div>
  );
}
