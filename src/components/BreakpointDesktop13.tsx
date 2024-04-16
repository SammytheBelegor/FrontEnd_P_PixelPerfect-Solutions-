import { FunctionComponent } from "react";
import styles from "./BreakpointDesktop13.module.css";

export type BreakpointDesktop1Type = {
  heading?: string;
  text?: string;
  button?: string;
  button1?: string;
  heading1?: string;
  text1?: string;
  button2?: string;
  button3?: string;
  heading2?: string;
  text2?: string;
  button4?: string;
  button5?: string;
};

const BreakpointDesktop1: FunctionComponent<BreakpointDesktop1Type> = ({
  heading,
  text,
  button,
  button1,
  heading1,
  text1,
  button2,
  button3,
  heading2,
  text2,
  button4,
  button5,
}) => {
  return (
    <div className={styles.breakpointDesktop}>
      <div className={styles.content}>
        <div className={styles.column}>
          <div className={styles.sectionTitle}>
            <img
              className={styles.iconRelume}
              alt=""
              src="/icon--relume1.svg"
            />
            <div className={styles.sectionTitle}>
              <b className={styles.heading}>{heading}</b>
              <div className={styles.text}>{text}</div>
            </div>
          </div>
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
        <div className={styles.column}>
          <div className={styles.sectionTitle}>
            <img
              className={styles.iconRelume}
              alt=""
              src="/icon--relume1.svg"
            />
            <div className={styles.sectionTitle}>
              <b className={styles.heading}>{heading1}</b>
              <div className={styles.text}>{text1}</div>
            </div>
          </div>
          <div className={styles.actions}>
            <div className={styles.stylesecondarySmallfalse}>
              <div className={styles.button}>{button2}</div>
            </div>
            <div className={styles.stylelinkSmallfalseDark}>
              <div className={styles.button}>{button3}</div>
              <img
                className={styles.iconChevronRight}
                alt=""
                src="/icon--chevronright.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.sectionTitle}>
            <img
              className={styles.iconRelume}
              alt=""
              src="/icon--relume1.svg"
            />
            <div className={styles.sectionTitle}>
              <b className={styles.heading}>{heading2}</b>
              <div className={styles.text}>{text2}</div>
            </div>
          </div>
          <div className={styles.actions}>
            <div className={styles.stylesecondarySmallfalse}>
              <div className={styles.button}>{button4}</div>
            </div>
            <div className={styles.stylelinkSmallfalseDark}>
              <div className={styles.button}>{button5}</div>
              <img
                className={styles.iconChevronRight}
                alt=""
                src="/icon--chevronright.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakpointDesktop1;
