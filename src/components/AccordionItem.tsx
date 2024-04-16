import { FunctionComponent } from "react";
import styles from "./AccordionItem.module.css";

export type AccordionItemType = {
  question?: string;
};

const AccordionItem: FunctionComponent<AccordionItemType> = ({ question }) => {
  return (
    <div className={styles.accordionItem}>
      <div className={styles.divider} />
      <div className={styles.title}>
        <b className={styles.question}>{question}</b>
        <img className={styles.icon} alt="" src="/icon2.svg" />
      </div>
    </div>
  );
};

export default AccordionItem;
