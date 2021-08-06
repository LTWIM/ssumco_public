import React from 'react'
import styles from '../styles/module_stylesheets/Nav.module.scss'
import { Facebook } from './svg'
export default function Nav (props) {

  const page = (name) => {
    return(
      <div className={styles.Desktop__Nav__pageCont}>
        <div className={styles.Desktop__Nav__page}>
          {name} <div className={styles.Desktop__Nav__currentPage}/>
        </div>
      </div>
    )
  }

  const logo = (name) => {
    return(
      <div className={styles.Desktop__Nav__logoCont}>
        <div className={styles.Desktop__Nav__logo}>{name}</div>
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
        
      </div>
    </div>
  )
}
