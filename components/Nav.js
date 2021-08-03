import React from 'react'
import styles from '../styles/module_stylesheets/Nav.module.scss'
import { Facebook } from './svg'
export default function Nav (props) {

  const page = (name) => {
    return(
      <div className={styles.Nav__pageCont}>
        <div className={styles.Nav__page}>
          {name}
          <div className={styles.Nav__currentPage}/>
        </div>
      </div>
    )
  }

  const logo = (name) => {
    return(
      <div className={styles.Nav__logoCont}>
        <div className={styles.Nav__logo}>
          {name}
        </div>
      </div>
    )
  }
    return(
        <div className={styles.Nav}>
          <div className={styles.Nav__wrapper}>

            {logo("SSUMCO")}

            <div className={styles.Nav__pageWrapper}>
              <div className={styles.Nav__pageSection}>

                {page("Home")}
                {page("About")}
                {page("Prices")}
                {page("Pages")}
                {page("Blog")}
                {page("Contact")}
                {page(Facebook("27px"))}

                {/* 
                <div className={styles.Nav__pageCont}>
                  <div className={styles.Nav__search}>
                    Search
                  </div>
                </div>
                 */}
              
              </div>
              

            </div>
          </div>
        </div>
    )
}