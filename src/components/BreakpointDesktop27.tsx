import { FunctionComponent } from "react";
import styles from "./BreakpointDesktop27.module.css";

export type BreakpointDesktop27Type = {
  heading?: string;
};

const BreakpointDesktop27: FunctionComponent<BreakpointDesktop27Type> = ({
  heading,
}) => {
  return (
    <div className={styles.breakpointDesktop}>
      <b className={styles.heading}>{heading}</b>
      <div className={styles.content}>
        <img
          className={styles.logo2ColordarkIcon}
          alt=""
          src="/logo2-colordark4.svg"
        />
        <img
          className={styles.logo2ColordarkIcon}
          alt=""
          src="/logo1-colordark3.svg"
        />
        <img
          className={styles.logo2ColordarkIcon}
          alt=""
          src="/logo2-colordark4.svg"
        />
        <img
          className={styles.logo2ColordarkIcon}
          alt=""
          src="/logo1-colordark3.svg"
        />
        <img
          className={styles.logo2ColordarkIcon}
          alt=""
          src="/logo2-colordark4.svg"
        />
        <img
          className={styles.logo2ColordarkIcon}
          alt=""
          src="/logo1-colordark3.svg"
        />
        <img
          className={styles.logo2ColordarkIcon}
          alt=""
          src="/logo2-colordark4.svg"
        />
      </div>
    </div>
  );
};

export default BreakpointDesktop27;
