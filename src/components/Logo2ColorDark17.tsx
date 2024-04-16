import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Logo2ColorDark17.module.css";

export type Logo2ColorDark17Type = {
  logo2ColorDark17Logo2Colo?: string;

  /** Style props */
  logo2ColorDarkIconWidth?: CSSProperties["width"];
  logo2ColorDarkIconPosition?: CSSProperties["position"];
};

const Logo2ColorDark17: FunctionComponent<Logo2ColorDark17Type> = ({
  logo2ColorDark17Logo2Colo,
  logo2ColorDarkIconWidth,
  logo2ColorDarkIconPosition,
}) => {
  const logo2ColorDarkIconStyle: CSSProperties = useMemo(() => {
    return {
      width: logo2ColorDarkIconWidth,
      position: logo2ColorDarkIconPosition,
    };
  }, [logo2ColorDarkIconWidth, logo2ColorDarkIconPosition]);

  return (
    <img
      className={styles.logo2ColordarkIcon}
      alt=""
      src={logo2ColorDark17Logo2Colo}
      style={logo2ColorDarkIconStyle}
    />
  );
};

export default Logo2ColorDark17;
