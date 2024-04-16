import { FunctionComponent } from "react";
import styles from "./BreakpointDesktop19.module.css";

export type BreakpointDesktop19Type = {
  subheading?: string;
  heading?: string;
  text?: string;
  subheadingOne?: string;
  text1?: string;
  subheadingTwo?: string;
  text2?: string;
  button?: string;
  button1?: string;
  placeholderImage?: string;
};

const BreakpointDesktop19: FunctionComponent<BreakpointDesktop19Type> = ({
  subheading,
  heading,
  text,
  subheadingOne,
  text1,
  subheadingTwo,
  text2,
  button,
  button1,
  placeholderImage,
}) => {
  return (
    <div className={styles.breakpointDesktop}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content1}>
            <div className={styles.sectionTitle}>
              <div className={styles.subheading}>{subheading}</div>
              <div className={styles.content2}>
                <b className={styles.heading}>{heading}</b>
                <div className={styles.text}>{text}</div>
              </div>
            </div>
            <div className={styles.list}>
              <div className={styles.listItem}>
                <img
                  className={styles.iconRelume}
                  alt=""
                  src="/icon--relume1.svg"
                />
                <b className={styles.subheadingOne}>{subheadingOne}</b>
                <div className={styles.text1}>{text1}</div>
              </div>
              <div className={styles.listItem}>
                <img
                  className={styles.iconRelume}
                  alt=""
                  src="/icon--relume1.svg"
                />
                <b className={styles.subheadingOne}>{subheadingTwo}</b>
                <div className={styles.text1}>{text2}</div>
              </div>
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
        <img
          className={styles.placeholderImageIcon}
          alt=""
          src={placeholderImage}
        />
      </div>
    </div>
  );
};

export default BreakpointDesktop19;
