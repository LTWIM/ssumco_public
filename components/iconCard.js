import React from 'react'
import styles from '../styles/module_stylesheets/iconCard.module.scss'
export default function IconCard (props) {
    return(
      <div className={styles.iconCard}>
        <div className={styles.iconCard__icon} style={{
          backgroundImage:`URL(${props.img})`,
          backgroundSize:'contain',
          backgroundPosition:'center',
          backgroundRepeat:'no-repeat'
        }}>
          <div className={styles.IconCard__oval} style={{
            backgroundColor:`${props.color}`
          }}/>
        </div>
        <div className={styles.iconCard__name}>
          Security
        </div>
        <div className={styles.iconCard__dash} style={{
            backgroundColor:`${props.color}`}}
        />
        <div className={styles.iconCard__body}>
          Aliquam vestibulum morbi blandit cursus risus at ultrices
        </div>
      </div>
    )
}