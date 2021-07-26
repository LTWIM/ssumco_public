import React from 'react'
import styles from '../styles/module_stylesheets/iconBanner.module.scss'
import { IconCard } from './index'

export default function IconBanner (props) {

    const displayCard = () => {
      return(
        <div className={styles.iconBanner__cardcont}>
          {props.cardinfo.map(card => 
          <div className={styles.iconBanner__Card}>
            <IconCard 
              title={card.title}
              body={card.body}
              img={card.img}
              color={card.color}
            />
          </div>
          )}
        </div>
      )
    }

    
    return(
      <div className={styles.iconBanner}>
        <div className={styles.iconBanner__wrapper}>
          <div className={styles.iconBanner__cont}>
            <div className={styles.iconBanner__title}>
              {props.title}
            </div>
            <div className={styles.iconBanner__body}>
              {props.body}
            </div>  
            {displayCard()}
          </div>
        </div>
      </div>
    )
}