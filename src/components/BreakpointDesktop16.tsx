import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BreakpointDesktop16.module.css";

export type BreakpointDesktop16Type = {
  heading?: string;
  text?: string;
  button?: string;
  button1?: string;

  /** Style props */
  breakpointDesktopBackgroundImage?: CSSProperties["backgroundImage"];
};

const BreakpointDesktop16: FunctionComponent<BreakpointDesktop16Type> = ({
  heading,
  text,
  button,
  button1,
  breakpointDesktopBackgroundImage,
}) => {
  const breakpointDesktopStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: breakpointDesktopBackgroundImage,
    };
  }, [breakpointDesktopBackgroundImage]);

  return (
    <div className={styles.breakpointDesktop} style={breakpointDesktopStyle}>
      <div className={styles.content}>
        <div className={styles.content1}>
          <b className={styles.heading}>{heading}</b>
          <div className={styles.text}>{text}</div>
        </div>
        <div className={styles.actions}>
          <div className={styles.styleprimarySmallfalseDa}>
            <div className={styles.button}>{button}</div>
          </div>
          <div className={styles.stylesecondarySmallfalse}>
            <div className={styles.button}>{button1}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakpointDesktop16;
