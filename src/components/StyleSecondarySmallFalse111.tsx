import { FunctionComponent } from "react";
import styles from "./StyleSecondarySmallFalse111.module.css";

export type StyleSecondarySmallFalse11Type = {
  buttonText?: string;
};

const StyleSecondarySmallFalse11: FunctionComponent<
  StyleSecondarySmallFalse11Type
> = ({ buttonText }) => {
  return (
    <div className={styles.stylesecondarySmallfalse}>
      <div className={styles.button}>{buttonText}</div>
    </div>
  );
};

export default StyleSecondarySmallFalse11;
