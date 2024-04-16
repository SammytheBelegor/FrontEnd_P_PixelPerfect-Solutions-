import { FunctionComponent } from "react";
import styles from "./ListItem1.module.css";

export type ListItem1Type = {
  heading?: string;
  text?: string;
  button?: string;
};

const ListItem1: FunctionComponent<ListItem1Type> = ({
  heading,
  text,
  button,
}) => {
  return (
    <div className={styles.listItem}>
      <img className={styles.iconRelume} alt="" src="/icon--relume1.svg" />
      <b className={styles.heading}>{heading}</b>
      <div className={styles.text}>{text}</div>
      <div className={styles.action}>
        <div className={styles.stylelinkSmallfalseDark}>
          <div className={styles.button}>{button}</div>
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

export default ListItem1;
