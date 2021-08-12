import React from 'react'
import styles from '../styles/module_stylesheets/mainbanner.module.scss'
export default function MainBanner (props) {

  const backgroundAnimation = () => {
    if (props.animation){
      return(
        <div className={styles.mainbanner__background}>
          {/* <div className={styles.mainbanner__shape1}/>
          <div className={styles.mainbanner__shape2}/> */}
          {/* <div className={styles.mainbanner__oval1} style={{
            backgroundImage:`URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/mainbanner/oval-light.png")`,
            backgroundPosition:"center",
            backgroundSize:'contain',
            backgroundRepeat:"no-repeat",
          }}/> */}
          {/* <div className={styles.mainbanner__oval2} style={{
            backgroundImage:`URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/mainbanner/oval-dark.png")`,
            backgroundPosition:"center",
            backgroundSize:'contain',
            backgroundRepeat:"no-repeat"
          }}/> */}
          <div className={styles.mainvanner__element} id={styles.element_animation1}/>
          <div className={styles.mainvanner__element} id={styles.element_animation2}/>
          <div className={styles.mainvanner__element} id={styles.element_animation3}/>
          <div className={styles.mainvanner__element} id={styles.element_animation4}/>
          <div className={styles.mainvanner__element} id={styles.element_animation5}/>
          <div className={styles.mainvanner__element} id={styles.element_animation6}/>
          <div className={styles.mainvanner__element} id={styles.element_animation7}/>
          <div className={styles.mainvanner__element} id={styles.element_animation8}/>
            <div className={styles.mainbanner__icon} id={styles.icon_animation1} style={{
              backgroundImage:`URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/icons/chat.png")`,
            }}/>
            <div className={styles.mainbanner__icon} id={styles.icon_animation2}/>
            <div className={styles.mainbanner__icon} id={styles.icon_animation3}/>

            <div className={styles.mainbanner__icon} id={styles.icon_animation4} style={{
              backgroundImage:`URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/icons/check.png")`,
            }}/>
            <div className={styles.mainbanner__icon} id={styles.icon_animation5}/>
            <div className={styles.mainbanner__icon} id={styles.icon_animation6}/>

            <div className={styles.mainbanner__icon} id={styles.icon_animation7} style={{
              backgroundImage:`URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/icons/msg.png")`,
            }}/>

            <div className={styles.mainbanner__icon} id={styles.icon_animation8}/>
            <div className={styles.mainbanner__icon} id={styles.icon_animation9} style={{
              backgroundImage:`URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/icons/check.png")`
            }}/>
            <div className={styles.mainbanner__icon} id={styles.icon_animation10}/>
            <div className={styles.mainbanner__icon} id={styles.icon_animation11}/>

            <div className={styles.mainbanner__icon} id={styles.icon_animation12} style={{
              backgroundImage:`URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/icons/blueMsg.png")`
            }}/>
            <div className={styles.mainbanner__icon} id={styles.icon_animation13}/>
            <div className={styles.mainbanner__icon} id={styles.icon_animation14}/>

          {/* circle ruler */}
          {/* <div style={{
            position:'absolute',
            border:`1px solid`, 
            borderRadius:'50%', 
            width:'550px',
            height:'550px',
            margin:'auto',
            top:'0',
            bottom:'0',
            left:'0',
            right:'0'
            
            }}/> */}
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
            <div className={styles.mainbanner__text} style={{paddingRight:`50px`}}>
              <div className={styles.mainbanner__Header1}>
                Hi!
              </div>
              <div className={styles.mainbanner__Header2}>
                We&apos;re just Ssum Company
              </div>
              <div className={styles.mainbanner__body}>
                Sed dignissim vehicula lorem, ac vulputate leo porta sit amet. Ut commodo nisl et sem sollicitudin gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae
              </div>
              <div className={styles.mainbanner__btn}>
                Read more
              </div>
            </div>
            <div className={styles.mainbanner__photo1}/>
            <div className={styles.mainbanner__photo2}/>

          </div>
        </div>
    )
}