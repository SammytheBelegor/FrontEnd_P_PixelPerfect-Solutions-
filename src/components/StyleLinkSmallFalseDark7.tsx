import { FunctionComponent } from "react";
import styles from "./StyleLinkSmallFalseDark7.module.css";

export type StyleLinkSmallFalseDark7Type = {
  button?: string;
  iconRelume?: string;
};

const StyleLinkSmallFalseDark7: FunctionComponent<
  StyleLinkSmallFalseDark7Type
> = ({ button, iconRelume }) => {
  return (
    <div className={styles.stylelinkSmallfalseDark}>
      <div className={styles.button}>{button}</div>
      <img className={styles.iconRelume} alt="" src={iconRelume} />
    </div>
  );
};

export default StyleLinkSmallFalseDark7;
