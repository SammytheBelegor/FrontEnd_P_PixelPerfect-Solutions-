import { FunctionComponent } from "react";
import styles from "./Column.module.css";

export type ColumnType = {
  quote?: string;
  nameSurname?: string;
  text?: string;
};

const Column: FunctionComponent<ColumnType> = ({
  quote,
  nameSurname,
  text,
}) => {
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
          src="/avatar-image2@2x.png"
        />
        <div className={styles.avatarContent}>
          <div className={styles.nameSurname}>{nameSurname}</div>
          <div className={styles.text}>{text}</div>
        </div>
        <img
          className={styles.logo2ColordarkIcon}
          alt=""
          src="/logo2-colordark1.svg"
        />
      </div>
    </div>
  );
};

export default Column;
