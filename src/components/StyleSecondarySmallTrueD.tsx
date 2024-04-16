import { FunctionComponent } from "react";
import styles from "./StyleSecondarySmallTrueD.module.css";

export type StyleSecondarySmallTrueDType = {
  buttonText?: string;
};

const StyleSecondarySmallTrueD: FunctionComponent<
  StyleSecondarySmallTrueDType
> = ({ buttonText }) => {
  return (
    <div className={styles.stylesecondarySmalltrueD}>
      <div className={styles.button}>{buttonText}</div>
    </div>
  );
};

export default StyleSecondarySmallTrueD;
