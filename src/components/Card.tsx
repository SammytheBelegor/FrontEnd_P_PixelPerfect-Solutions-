import { FunctionComponent } from "react";
import styles from "./Card.module.css";

export type CardType = {
  name1?: string;
  jobTitle?: string;
  text?: string;
};

const Card: FunctionComponent<CardType> = ({ name1, jobTitle, text }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.placeholderImage1}
        alt=""
        src="/placeholder-image-1@2x.png"
      />
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.name}>{name1}</div>
          <div className={styles.jobTitle}>{jobTitle}</div>
        </div>
        <div className={styles.text}>{text}</div>
      </div>
      <div className={styles.socialIcons}>
        <img className={styles.iconLinkedin} alt="" src="/icon--linkedin.svg" />
        <img className={styles.iconLinkedin} alt="" src="/icon--x.svg" />
        <img className={styles.iconLinkedin} alt="" src="/icon--dribble.svg" />
      </div>
    </div>
  );
};

export default Card;
