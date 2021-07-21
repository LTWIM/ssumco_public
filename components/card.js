import React from "react"
import styles from "../stytles/module_stylesheets/card.module.scss"

export default function Card(props){
    return(
        <div className={styles.contt__wrapper}>
            <div className={styles.title__cont}>
                
            </div>
            <div className={styles.txt__cont}>

            </div>
            <div className={styles.card__cont}>
                <div className={styles.card__img__cont}></div>
                <div className={styles.card__title.cont}></div>
                <div className={styles.card__txt.cont}></div>
            </div>
        </div>
    )
}