import React from 'react'
import styles from '../styles/module_stylesheets/priceCardBanner.module.scss'
export default function PriceCardBanner (props) {
    return(
        <div className={styles.PriceCardBanner}>
          <div className={styles.PriceCardBanner__cont}>
            <div className={styles.PriceCardBanner__header}>
              {props.header}
            </div>
            <div className={styles.PriceCardBanner__body}>
              {props.body}
            </div>
          </div>
        </div>
    )
}