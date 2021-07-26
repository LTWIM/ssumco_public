import React from "react";
import styles from "../styles/About.module.scss";
import {TopBanner, IconBanner, PhotoBanner} from '../components/index'
export default function Home() {

  const cardInfo = [
    {
      title : "Security", 
      body : "Aliquam vestibulum morbi blandit cursus risus at ultrices", 
      img : "", 
      color : "#ff882e"
    },
    {
      title : "Security", 
      body : "Aliquam vestibulum morbi blandit cursus risus at ultrices", 
      img : "", 
      color : "#ff882e"
    },
    {
      title : "Security", 
      body : "Aliquam vestibulum morbi blandit cursus risus at ultrices", 
      img : "", 
      color : "#ff882e"
    },
    {
      title : "Security", 
      body : "Aliquam vestibulum morbi blandit cursus risus at ultrices", 
      img : "", 
      color : "#ff882e"
    }
  ]
  return(
  <div className={styles.About}>
    <TopBanner 
      title= "About Us" 
      breadCrumb="About" 
      pages={false}
    />
    <IconBanner 
      cardinfo = {cardInfo} 
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
  </div>
  ) 
}
