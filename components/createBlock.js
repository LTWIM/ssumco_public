import React, {useRef} from "react";
import styles from "../styles/module_stylesheets/photobanner.module.scss";
export default function CreateBlock(props) {
  return (
    <div className={props.selected === props.value 
      ? styles.PhotoBanner__block__active
      : styles.PhotoBanner__block
    }
    onClick={(e)=>{
      e.preventDefault();
      props.onChange(props.value);
    }}
    ref={props.blockref}
    >
      {props.title}
      <div className={styles.PhotoBanner__block__body}>
        {props.body}
        {props.type === "4" && <span>Learn More</span>}
      </div>
    </div>
  );
}
