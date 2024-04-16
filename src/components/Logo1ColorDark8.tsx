import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Logo1ColorDark8.module.css";

export type Logo1ColorDark8Type = {
  logo1ColorDark8Logo1Color?: string;

  /** Style props */
  logo1ColorDarkIconWidth?: CSSProperties["width"];
  logo1ColorDarkIconPosition?: CSSProperties["position"];
};

const Logo1ColorDark8: FunctionComponent<Logo1ColorDark8Type> = ({
  logo1ColorDark8Logo1Color,
  logo1ColorDarkIconWidth,
  logo1ColorDarkIconPosition,
}) => {
  const logo1ColorDarkIconStyle: CSSProperties = useMemo(() => {
    return {
      width: logo1ColorDarkIconWidth,
      position: logo1ColorDarkIconPosition,
    };
  }, [logo1ColorDarkIconWidth, logo1ColorDarkIconPosition]);

  return (
    <img
      className={styles.logo1ColordarkIcon}
      alt=""
      src={logo1ColorDark8Logo1Color}
      style={logo1ColorDarkIconStyle}
    />
  );
};

export default Logo1ColorDark8;
