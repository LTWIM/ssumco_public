import React, {useState}  from 'react'
import {star} from './svg'
import styles from '../styles/module_stylesheets/quotebanner.module.scss'
export default function QuoteBanner (props) {
  
  const [page,Setpage] = useState(0)

  const starColor = (color = "#ffc107") => {
    return(
      <div className={styles.QuoteBanner__star}>
        {star("30px",color)}
      </div>
    )
  }

  const pageLimit = () => {
    if(page > 0){
      Setpage(page - 1)
    }
  }
    return(
        <div className={styles.QuoteBanner}>
          <div className={styles.QuoteBanner__cont}>
            <div className={styles.QuoteBanner__top}>
              <div className={styles.QuoteBanner__left} onClick={()=>{pageLimit()}}>
                angle-left
              </div>
              <div className={styles.QuoteBanner__current}>
                <div className={styles.QuoteBanner__company}>
                  {props.contents[page % props.contents.length].companyName}
                </div>
                <div className={styles.QuoteBanner__position}>
                  {props.contents[page % props.contents.length].position}
                </div>
              </div>
              <div className={styles.QuoteBanner__right} onClick={()=>{Setpage(page + 1)}}>
                angle-right
              </div>
            </div>
            <div className={styles.QuoteBanner__bodycont}>
              <div className={styles.QuoteBanner__text}>
                “{props.contents[page % props.contents.length].body}”
              </div>
            </div>
            <div className={styles.QuoteBanner__ratecont}>
              {starColor()}
              {starColor()}
              {starColor()}
              {starColor()}
              {starColor()}

            </div>
          </div>  
        </div>
    )
}