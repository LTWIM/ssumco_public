import React from "react";
import styles from "../styles/module_stylesheets/useBackground.module.scss";
import { backgroundImg1 } from "./svg";

export default function UseBackground(props) {

  const defaultProps = {
    height: `${props.height ? `${props.height}` : '500px'}`,
    type: '1',
  }
  

  
  const backgroundImg = (type) => {
    switch (type) {
      case '1':
        return(
          <div className={styles.UseBackground__container} style={{
          }}>
            <div className={styles.UseBackground__type1__outter} style={{
              backgroundImage:`URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/useBackground/type1-2.png")`,
              }}>
              <div className={styles.UseBackground__type1__inner} style={{
              height:`${defaultProps.height}`,
              backgroundImage:`URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/useBackground/type1-1.png")`,
              }}>
              </div>
            </div>
          </div>
        )
      case '2':
        return(
          <div className={styles.UseBackground__container}>
            <div className={styles.UseBackground__type2__outter} style={{
              height:`700px`,
              backgroundImage:`URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/useBackground/type2-1.png")`
            }}>
              <div className={styles.UseBackground__type2__inner} style={{
              height:`700px`,
              backgroundImage:`URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/useBackground/type2-2.png")`
              }}>
              </div>
            </div>
          </div>
        )
      case '3':
        return(
          <div className={styles.UseBackground__container}>
            <div className={styles.UseBackground__type3} style={{
              backgroundImage:`URL("https://jkconstruction.s3.us-west-1.amazonaws.com/ssumCo/modules/useBackground/type3-1.png")`,
            }}/>
          </div>
        )
      default:
        break;
    }
  }

  return (
    <div className={styles.UseBackground} style={{
    }}>
      {backgroundImg(props.type)}
    </div>
  );
}
