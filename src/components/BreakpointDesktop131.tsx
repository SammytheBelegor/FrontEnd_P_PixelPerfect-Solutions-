import { FunctionComponent } from "react";
import styles from "./BreakpointDesktop131.module.css";

export type BreakpointDesktop13Type = {
  heading?: string;
  text?: string;
  button?: string;
  button1?: string;
};

const BreakpointDesktop13: FunctionComponent<BreakpointDesktop13Type> = ({
  heading,
  text,
  button,
  button1,
}) => {
  return (
    <div className={styles.breakpointDesktop}>
      <div className={styles.container}>
        <div className={styles.content}>
          <b className={styles.heading}>{heading}</b>
          <div className={styles.text}>{text}</div>
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
        </div>
        <div className={styles.content1}>
          <div className={styles.row}>
            <div className={styles.logo}>
              <img
                className={styles.logo2ColordarkIcon}
                alt=""
                src="/logo2-colordark1.svg"
              />
            </div>
            <div className={styles.logo}>
              <img
                className={styles.logo2ColordarkIcon}
                alt=""
                src="/logo2-colordark1.svg"
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.logo}>
              <img
                className={styles.logo2ColordarkIcon}
                alt=""
                src="/logo1-colordark.svg"
              />
            </div>
            <div className={styles.logo}>
              <img
                className={styles.logo2ColordarkIcon}
                alt=""
                src="/logo1-colordark.svg"
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.logo}>
              <img
                className={styles.logo2ColordarkIcon}
                alt=""
                src="/logo2-colordark1.svg"
              />
            </div>
            <div className={styles.logo}>
              <img
                className={styles.logo2ColordarkIcon}
                alt=""
                src="/logo2-colordark1.svg"
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.logo}>
              <img
                className={styles.logo2ColordarkIcon}
                alt=""
                src="/logo1-colordark.svg"
              />
            </div>
            <div className={styles.logo}>
              <img
                className={styles.logo2ColordarkIcon}
                alt=""
                src="/logo1-colordark.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakpointDesktop13;
