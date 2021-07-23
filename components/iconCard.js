import React from 'react'
import styles from '../styles/module_stylesheets/iconCard.module.scss'
export default function IconCard (props) {
    return(
      <div className={styles.iconCard}>
        <div className={styles.iconCard__icon}>

        </div>
        <div className={styles.iconCard__name}>
          Security
        </div>
        <div className={styles.iconCard__dash}/>
        <div className={styles.iconCard__body}>
        Aliquam vestibulum morbi blandit cursus risus at ultrices
        </div>
      </div>
    )
}