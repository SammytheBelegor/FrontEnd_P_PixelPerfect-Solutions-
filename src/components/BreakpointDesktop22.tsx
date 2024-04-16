import { FunctionComponent } from "react";
import styles from "./BreakpointDesktop22.module.css";

export type BreakpointDesktop22Type = {
  subheading?: string;
  heading?: string;
  text?: string;
  link?: string;
  link1?: string;
  text1?: string;
  placeholderImage?: string;
};

const BreakpointDesktop22: FunctionComponent<BreakpointDesktop22Type> = ({
  subheading,
  heading,
  text,
  link,
  link1,
  text1,
  placeholderImage,
}) => {
  return (
    <div className={styles.breakpointDesktop}>
      <div className={styles.content}>
        <div className={styles.sectionTitle}>
          <div className={styles.subheading}>{subheading}</div>
          <div className={styles.content1}>
            <b className={styles.heading}>{heading}</b>
            <div className={styles.text}>{text}</div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.content2}>
            <img
              className={styles.iconEnvelope}
              alt=""
              src="/icon--envelope.svg"
            />
            <div className={styles.contactInfo}>
              <b className={styles.heading1}>Email</b>
              <div className={styles.link}>{link}</div>
            </div>
          </div>
          <div className={styles.content2}>
            <img
              className={styles.iconEnvelope}
              alt=""
              src="/icon--phone.svg"
            />
            <div className={styles.contactInfo}>
              <b className={styles.heading1}>Phone</b>
              <div className={styles.link}>{link1}</div>
            </div>
          </div>
          <div className={styles.content2}>
            <img className={styles.iconEnvelope} alt="" src="/icon--map.svg" />
            <div className={styles.contactInfo}>
              <b className={styles.heading1}>Office</b>
              <div className={styles.text1}>{text1}</div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.placeholderImageIcon}
        alt=""
        src={placeholderImage}
      />
    </div>
  );
};

export default BreakpointDesktop22;
