import React from "react";
import styles from "../styles/About.module.scss";
import {TopBanner, IconBanner} from '../components/index'
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
  </div>
  ) 
}
