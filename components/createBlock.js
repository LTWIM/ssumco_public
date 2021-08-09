import React, {useRef} from "react";
import styles from "../styles/module_stylesheets/photobanner.module.scss";
export default function CreateBlock(props) {

  switch (props.type) {
    case "2":
      return(
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
          <div className={styles.PhotoBanner__block__body} >
            {props.body}
            {props.type === "4" && <span>Learn More</span>}
          </div>
        </div>
      )
    case "4":
      return(
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
            {props.type === "4" && <div className={styles.learnmore}>Learn More</div>}
          </div>
        </div>
      )
      case "7":
        return(
          <div className={props.selected === props.value 
            ? styles.PhotoBanner__block__type7__active
            : styles.PhotoBanner__block__type7
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
              {props.type === "7" && <div className={styles.learnmore}>Learn More</div>}
            </div>
          </div>
        )
        case "8":
          return(
            <div className={props.selected === props.value 
              ? styles.PhotoBanner__block__type7__active
              : styles.PhotoBanner__block__type7
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
                {props.type === "8" && <div className={styles.learnmore}>Learn More</div>}
              </div>
            </div>
          )
    default:
      break;
  }
}
