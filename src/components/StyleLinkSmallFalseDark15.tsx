import { FunctionComponent } from "react";
import styles from "./StyleLinkSmallFalseDark15.module.css";

export type StyleLinkSmallFalseDark15Type = {
  button?: string;
  iconRelume?: string;
};

const StyleLinkSmallFalseDark15: FunctionComponent<
  StyleLinkSmallFalseDark15Type
> = ({ button, iconRelume }) => {
  return (
    <div className={styles.stylelinkSmallfalseDark}>
      <div className={styles.button}>{button}</div>
      <img className={styles.iconRelume} alt="" src={iconRelume} />
    </div>
  );
};

export default StyleLinkSmallFalseDark15;
