import { FunctionComponent } from "react";
import styles from "./Container.module.css";

export type ContainerType = {
  text?: string;
  question?: string;
  question1?: string;
  question2?: string;
  question3?: string;
  question4?: string;
  heading?: string;
  text1?: string;
};

const Container: FunctionComponent<ContainerType> = ({
  text,
  question,
  question1,
  question2,
  question3,
  question4,
  heading,
  text1,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>
        <b className={styles.heading}>FAQs</b>
        <div className={styles.text}>{text}</div>
      </div>
      <div className={styles.accordion}>
        <div className={styles.accordionItem}>
          <b className={styles.question}>{question}</b>
          <img className={styles.plusIcon} alt="" src="/plus.svg" />
        </div>
        <div className={styles.accordionItem}>
          <b className={styles.question}>{question1}</b>
          <img className={styles.plusIcon} alt="" src="/plus.svg" />
        </div>
        <div className={styles.accordionItem}>
          <b className={styles.question}>{question2}</b>
          <img className={styles.plusIcon} alt="" src="/plus.svg" />
        </div>
        <div className={styles.accordionItem}>
          <b className={styles.question}>{question3}</b>
          <img className={styles.plusIcon} alt="" src="/plus.svg" />
        </div>
        <div className={styles.accordionItem}>
          <b className={styles.question}>{question4}</b>
          <img className={styles.plusIcon} alt="" src="/plus.svg" />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.content1}>
          <b className={styles.heading1}>{heading}</b>
          <div className={styles.text}>{text1}</div>
        </div>
        <div className={styles.stylesecondarySmallfalse}>
          <div className={styles.button}>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Container;
