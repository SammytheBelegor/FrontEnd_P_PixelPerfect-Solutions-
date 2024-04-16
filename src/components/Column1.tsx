import { FunctionComponent } from "react";
import styles from "./Column1.module.css";

export type Column1Type = {
  heading?: string;
  text?: string;
};

const Column1: FunctionComponent<Column1Type> = ({ heading, text }) => {
  return (
    <div className={styles.column}>
      <img
        className={styles.placeholderImageIcon}
        alt=""
        src="/placeholder-image5@2x.png"
      />
      <div className={styles.content}>
        <div className={styles.content1}>
          <b className={styles.heading}>{heading}</b>
          <div className={styles.text}>{text}</div>
        </div>
        <div className={styles.stylelinkSmallfalseDark}>
          <div className={styles.button}>Get Directions</div>
          <img
            className={styles.iconChevronRight}
            alt=""
            src="/icon--chevronright.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Column1;
