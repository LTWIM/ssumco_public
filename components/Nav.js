import React from 'react'
import styles from '../styles/module_stylesheets/Nav.module.scss'
export default function Nav (props) {
    return(
        <div className={styles.Nav}>
          <div className={styles.Nav__wrapper}>
            
            <div className={styles.Nav__logoCont}>
              <div className={styles.Nav__logo}>
                SSUMCO
              </div>
            </div>
            
            <div className={styles.Nav__pageWrapper}>
              <div className={styles.Nav__pageSection}>
                <div className={styles.Nav__pageCont}>
                  <div className={styles.Nav__page}>
                    Home
                    <div className={styles.Nav__currentPage}/>
                  </div>
                </div>
                
                <div className={styles.Nav__pageCont}>
                  <div className={styles.Nav__page}>
                    About
                    <div className={styles.Nav__currentPage}/>
                  </div>
                </div>
                
                <div className={styles.Nav__pageCont}>
                  <div className={styles.Nav__page}>
                    Prices
                    <div className={styles.Nav__currentPage}/>
                  </div>
                </div>
                
                <div className={styles.Nav__pageCont}>
                  <div className={styles.Nav__page}>
                    Pages
                    <div className={styles.Nav__currentPage}/>
                  </div>
                </div>

                <div className={styles.Nav__pageCont}>
                  <div className={styles.Nav__page}>
                    Blog
                    <div className={styles.Nav__currentPage}/>
                  </div>
                </div>

                <div className={styles.Nav__pageCont}>
                  <div className={styles.Nav__page}>
                    Contact
                    <div className={styles.Nav__currentPage}/>
                  </div>
                </div>

                <div className={styles.Nav__pageCont}>
                  <div className={styles.Nav__Facebook}>
                    Facebook
                  </div>
                </div>

                <div className={styles.Nav__pageCont}>
                  <div className={styles.Nav__search}>
                    Search
                  </div>
                </div>
              </div>
              

            </div>
          </div>
        </div>
    )
}