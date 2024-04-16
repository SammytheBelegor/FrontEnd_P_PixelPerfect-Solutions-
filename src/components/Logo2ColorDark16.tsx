import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Logo2ColorDark16.module.css";

export type Logo2ColorDark16Type = {
  logo2ColorDark16Logo2Colo?: string;

  /** Style props */
  logo2ColorDarkIconWidth?: CSSProperties["width"];
  logo2ColorDarkIconPosition?: CSSProperties["position"];
};

const Logo2ColorDark16: FunctionComponent<Logo2ColorDark16Type> = ({
  logo2ColorDark16Logo2Colo,
  logo2ColorDarkIconWidth,
  logo2ColorDarkIconPosition,
}) => {
  const logo2ColorDarkIcon1Style: CSSProperties = useMemo(() => {
    return {
      width: logo2ColorDarkIconWidth,
      position: logo2ColorDarkIconPosition,
    };
  }, [logo2ColorDarkIconWidth, logo2ColorDarkIconPosition]);

  return (
    <img
      className={styles.logo2ColordarkIcon}
      alt=""
      src={logo2ColorDark16Logo2Colo}
      style={logo2ColorDarkIcon1Style}
    />
  );
};

export default Logo2ColorDark16;
