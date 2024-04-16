import { FunctionComponent } from "react";
import styles from "./Column2.module.css";

export type Column2Type = {
  quote?: string;
  text?: string;
  text1?: string;
};

const Column2: FunctionComponent<Column2Type> = ({ quote, text, text1 }) => {
  return (
    <div className={styles.column}>
      <div className={styles.stars}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
      <b className={styles.quote}>{quote}</b>
      <div className={styles.avatar}>
        <img
          className={styles.avatarImageIcon}
          alt=""
          src="/avatar-image@2x.png"
        />
        <div className={styles.avatarContent}>
          <div className={styles.text}>{text}</div>
          <div className={styles.text1}>{text1}</div>
        </div>
        <div className={styles.divider} />
        <img
          className={styles.logo2ColordarkIcon}
          alt=""
          src="/logo2-colordark.svg"
        />
      </div>
    </div>
  );
};

export default Column2;
