import { FunctionComponent } from "react";
import styles from "./StyleSecondarySmallFalse1.module.css";

export type StyleSecondarySmallFalse1Type = {
  buttonText?: string;
};

const StyleSecondarySmallFalse1: FunctionComponent<
  StyleSecondarySmallFalse1Type
> = ({ buttonText }) => {
  return (
    <div className={styles.stylesecondarySmallfalse}>
      <div className={styles.button}>{buttonText}</div>
    </div>
  );
};

export default StyleSecondarySmallFalse1;
