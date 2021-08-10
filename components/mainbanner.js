import React from 'react'
import styles from '../styles/module_stylesheets/mainbanner.module.scss'
export default function MainBanner (props) {

  const backgroundAnimation = () => {
    if (props.animation){
      return(
        <div className={styles.mainbanner__background}>
          {/* <div className={styles.mainbanner__shape1}/>
          <div className={styles.mainbanner__shape2}/> */}
          <div className={styles.mainbanner__oval1} style={{
            backgroundImage:`URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/mainbanner/oval-light.png")`,
            backgroundPosition:"center",
            backgroundSize:'contain',
            backgroundRepeat:"no-repeat",
          }}/>
          <div className={styles.mainbanner__oval2} style={{
            backgroundImage:`URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/mainbanner/oval-dark.png")`,
            backgroundPosition:"center",
            backgroundSize:'contain',
            backgroundRepeat:"no-repeat"
          }}/>
          <div className={styles.mainvanner__element} style={{}}/>
        </div>
      )
    }
    else{
      return(
        <div className={styles.mainbanner__background}>
          <div className={styles.mainbanner__oval1} style={{
            backgroundImage:`URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/mainbanner/oval-light.png")`,
            backgroundPosition:"center",
            backgroundSize:'contain',
            backgroundRepeat:"no-repeat"
          }}/>
          <div className={styles.mainbanner__oval2} style={{
            backgroundImage:`URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/mainbanner/oval-dark.png")`,
            backgroundPosition:"center",
            backgroundSize:'contain',
            backgroundRepeat:"no-repeat"
          }}/>
        </div>
      )
    }
  }
    return(
        <div className={styles.mainbanner}>

            {backgroundAnimation()}
          <div className={styles.mainbanner__textcont}>
            <div style={{paddingRight:`50px`}}>
              <div className={styles.mainbanner__Header1}>
                Hi!
              </div>
              <div className={styles.mainbanner__Header2}>
                We're just Ssum Company
              </div>
              <div className={styles.mainbanner__body}>
                Sed dignissim vehicula lorem, ac vulputate leo porta sit amet. Ut commodo nisl et sem sollicitudin gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae
              </div>
              <div className={styles.mainbanner__btn}>
                Read more
              </div>
            </div>
            <div className={styles.mainbanner__photo}/>
          </div>
        </div>
    )
}