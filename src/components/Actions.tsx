import { FunctionComponent } from "react";
import styles from "./Actions.module.css";

export type ActionsType = {
  button?: string;
  button1?: string;
};

const Actions: FunctionComponent<ActionsType> = ({ button, button1 }) => {
  return (
    <div className={styles.actions}>
      <div className={styles.stylesecondarySmallfalse}>
        <div className={styles.button}>{button}</div>
      </div>
      <div className={styles.stylelinkSmallfalseDark}>
        <div className={styles.button}>{button1}</div>
        <img
          className={styles.iconChevronRight}
          alt=""
          src="/icon--chevronright.svg"
        />
      </div>
    </div>
  );
};

export default Actions;
