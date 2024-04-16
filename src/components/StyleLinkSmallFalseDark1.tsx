import { FunctionComponent } from "react";
import styles from "./StyleLinkSmallFalseDark1.module.css";

export type StyleLinkSmallFalseDark1Type = {
  button?: string;
  iconRelume?: string;
};

const StyleLinkSmallFalseDark1: FunctionComponent<
  StyleLinkSmallFalseDark1Type
> = ({ button, iconRelume }) => {
  return (
    <div className={styles.stylelinkSmallfalseDark}>
      <div className={styles.button}>{button}</div>
      <img className={styles.iconRelume} alt="" src={iconRelume} />
    </div>
  );
};

export default StyleLinkSmallFalseDark1;
