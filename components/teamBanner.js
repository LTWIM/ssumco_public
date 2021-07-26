import React from 'react'
import styles from '../styles/module_stylesheets/teambanner.module.scss'
export default function teamBanner (props) {
  
  const displayMember = (member) => {
    return(
      <div className={styles.teamBanner__memberCont}>
        <div className={styles.teamBanner__photo}/>
        <div className={styles.teamBanner__name}>
          {member.name}
        </div>
        <div className={styles.teamBanner__position}>
          {member.position}
        </div>
        <div className={styles.teamBanner__detail}>
          {member.detail}
        </div>
      </div>
    )
  }
  
  return(
    <div className={styles.teamBanner}>
      <div className={styles.teamBanner__Wrapper}>

        <div className={styles.teamBanner__header}>
          Our Forward Thinkers
        </div>
        <div className={styles.teamBanner__body}> 
          Maximus mauris ipsum, consequat tincidunt orci eu, consectetur tempus est. Sed posuere sem a convallis maximus. Curabitur consequat dignissim nisl, at efficitur justo
        </div>
        <div className={styles.teamBanner__memberWrapper}>
          {props.member.map(member => displayMember(member))}
        </div>
      </div>
    </div>
  )
}