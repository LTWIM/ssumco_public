import React, {useState} from 'react'
import styles from '../styles/module_stylesheets/Nav.module.scss'
import { Facebook, Close } from './svg'
import Link from "next/link"; // use this for links

export default function Nav (props) {

  const [hamburgerClicked, setHamburherClicked] = useState(false)

  const page = (name, link) => {
    return(
      <div className={styles.Nav__pageCont}>
        <div className={styles.Nav__page}>
          {name} 
          <div className={styles.Desktop__Nav__currentPage}/>
        </div>
      </div>
    )
  }

  const logo = (name) => {  
    return(
      <div className={styles.Nav__logoCont}>
        <div className={styles.Nav__logo}>{name}</div>
      </div>
    )
  }

  const hamburger = (width, height) => {
    return(
      <div className={styles.Hamburger_cont} style={{
        width:`${width}`,
        height:`${height}`}}
        onClick={()=>{setHamburherClicked(true)}}
      >
        <div className={styles.Hamburger_bar} />
        <div className={styles.Hamburger_bar_mid} />
        <div className={styles.Hamburger_bar} />
      </div>
    )
  }

  const mobileMenu = () => {

    return(
      <div className={styles.mobileMenu} style={hamburgerClicked 
        ?{left:'0px'}
        :{left:'-400px'}}>
        <div className={styles.mobileMenu__close} onClick={()=>{setHamburherClicked(false)}}>
          {Close("30px")}
        </div>
        <div className={styles.mobileMenu__cont}>
          {page("Home")}
          {page("About")}
          {page("Prices")}
          {page("Pages")}
          {page("Blog")}
          {page("Contact")}
        </div>  
      </div>
    )
  }

  return(
    <div className={styles.Nav}>
      <div className={styles.Desktop__Nav}>
        <div className={styles.Desktop__Nav__wrapper}>
          {logo("SSUMCO")}
          <div className={styles.Desktop__Nav__pageWrapper}>
            <div className={styles.Desktop__Nav__pageSection}>
              {page("Home")}
              {page("About")}
              {page("Prices")}
              {page("Pages")}
              {page("Blog")}
              {page("Contact")}
              {page(Facebook("27px"))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.Mobile__Nav}>
        {hamburger("34px", "32px")}
        <div>
        {logo("SSUMCO")}
        </div>
        <div className={styles.Mobile__Nav__Facebook}> 
        {page(Facebook("36px"))}
        </div>
      </div>
      {mobileMenu()}
    </div>
  )
}
