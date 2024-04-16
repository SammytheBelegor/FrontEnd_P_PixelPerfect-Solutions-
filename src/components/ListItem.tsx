import { FunctionComponent } from "react";
import styles from "./ListItem.module.css";

export type ListItemType = {
  subheadingOne?: string;
  text?: string;
};

const ListItem: FunctionComponent<ListItemType> = ({ subheadingOne, text }) => {
  return (
    <div className={styles.listItem}>
      <img className={styles.iconRelume} alt="" src="/icon--relume1.svg" />
      <b className={styles.subheadingOne}>{subheadingOne}</b>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default ListItem;
