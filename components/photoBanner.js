import React from 'react'
import styles from '../styles/module_stylesheets/photobanner.module.scss'
export default function PhotoBanner (props) {
    const typeHandle = () => {
      
      switch (props.type) {
        case '1':
          return(
            <div className={styles.PhotoBanner__textcont}>
              <div className={styles.PhotoBanner__header1}>
                Why work with us
              </div>
              <div className={styles.PhotoBanner__header2}>
                for your technical and online needs?
              </div>
              <div className={styles.PhotoBanner__body}>
              Aenean elementum, quam in commodo accumsan, neque felis fringilla quam, iaculis euismod purus lorem sagittis turpis. Quisque ut ultricies ex. Fusce dictum consequat ipsum et efficitur. Morbi vitae nibh vitae est venenatis elementum vel ut orci
              </div>
              <div className={styles.PhotoBanner__btn}>
                Read more
              </div>
            </div>
          )
          break;
        case '2' :
          return(
            <div className={styles.PhotoBanner__blockcont}>
              <div className={styles.PhotoBanner__header1}>
                How to Choose your SSUM PLAN Plan?
              </div>
              <div className={}>

              </div>
            </div>

          )
        default:
          break;
      }
      
    }

    return(
        <div className={styles.PhotoBanner}>
          <div className={styles.PhotoBanner__background}>
            <div className={styles.PhotoBanner__vawe2} style={{
              backgroundImage:`URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/photobanner/vawe2.png")`,
            }}/>
            <div className={styles.PhotoBanner__vawe1} style={{
              backgroundImage:`URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/photobanner/vawe1.png")`,
            }}/>
          </div>
          <div className={styles.PhotoBanner__cont} style={props.direction === 'reverse' ? {
            flexDirection:'row-reverse'
          }
          :
          {
          }}>
            <div className={styles.PhotoBanner__photo}>

            </div>
            {typeHandle()}
          </div>
        </div>
    )
}