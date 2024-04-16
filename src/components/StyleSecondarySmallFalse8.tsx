import { FunctionComponent } from "react";
import styles from "./StyleSecondarySmallFalse8.module.css";

export type StyleSecondarySmallFalse8Type = {
  buttonText?: string;
};

const StyleSecondarySmallFalse8: FunctionComponent<
  StyleSecondarySmallFalse8Type
> = ({ buttonText }) => {
  return (
    <div className={styles.stylesecondarySmallfalse}>
      <div className={styles.button}>{buttonText}</div>
    </div>
  );
};

export default StyleSecondarySmallFalse8;
