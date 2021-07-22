import React from 'react'
import styles from '../styles/module_stylesheets/videobanner.module.scss'
export default function videoBanner (props) {
    return(
      <div className={styles.videoBanner}>
        <div className={styles.videoBanner__title}>
          {props.header}
        </div>
        <div className={styles.videoBanner__body}>
          {props.body}
        </div>
        <div className={styles.videoBanner__cont}>
          <div className={styles.videoBanner__videocont}>
            <div className={styles.videoBanner__video}>
              <div className={styles.videoBanner__btn}>
                <div className={styles.videoBanner__play}>
                  Play
                </div>
              </div>

            </div>
          </div>
        </div>
        
      </div>
    )
}