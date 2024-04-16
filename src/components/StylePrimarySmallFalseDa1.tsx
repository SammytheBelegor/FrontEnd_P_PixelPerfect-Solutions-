import { FunctionComponent } from "react";
import styles from "./StylePrimarySmallFalseDa1.module.css";

export type StylePrimarySmallFalseDa1Type = {
  buttonText?: string;
};

const StylePrimarySmallFalseDa1: FunctionComponent<
  StylePrimarySmallFalseDa1Type
> = ({ buttonText }) => {
  return (
    <div className={styles.styleprimarySmallfalseDa}>
      <div className={styles.button}>{buttonText}</div>
    </div>
  );
};

export default StylePrimarySmallFalseDa1;
