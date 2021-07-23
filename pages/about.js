import React from "react";
import styles from "../styles/About.module.scss";
import {TopBanner, IconCard} from '../components/index'
export default function Home() {
  return(
  <div className={styles.About}>
    <TopBanner title= "About Us" breadCrumb="About" pages={false}/>
    <IconCard/>
  </div>
  ) 
}
