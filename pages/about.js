import React from "react";
import styles from "../styles/About.module.scss";
import {TopBanner, IconBanner, PhotoBanner, TeamBanner} from '../components/index'
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
  const memberInfo = [
    {
      name: 'Joy Lee',
      position: "Front end developer",
      detail: "Donec pharetra nec diam in pharetra. Maecenas in metus dui. Vestibulum vestibulum lacinia mi. Vivamus massa dui",
      photo:''
    },
    {
      name: 'Paul Choi',
      position: "CEO",
      detail: "Nulla lacus ipsum, tincidunt in dui sit amet, fringilla vehicula tellus. Duis posuere gravida nibh a sollicitudin. Nulla pretium",
      photo:''
    },
    {
      name: 'Shawn Lee',
      position: "Full stack developer",
      detail: "Aenean dui arcu, porttitor vel orci id, euismod commodo sem. Aliquam rutrum ultricies orci",
      photo:''
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
    <TeamBanner
      header="Our Forward Thinkers"
      body="Front end developer"
      member = {memberInfo}
    />
  </div>
  ) 
}
