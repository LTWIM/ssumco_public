import React from 'react'
import styles from '../styles/module_stylesheets/Nav.module.scss'
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

                {page("Home")}
                {page("About")}
                {page("Prices")}
                {page("Pages")}
                {page("Blog")}
                {page("Contact")}
                {page("Facebook")}

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