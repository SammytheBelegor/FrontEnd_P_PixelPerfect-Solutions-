import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Logo1ColorDark7.module.css";

export type Logo1ColorDark7Type = {
  logo1ColorDark7Logo1Color?: string;

  /** Style props */
  logo1ColorDarkIconWidth?: CSSProperties["width"];
  logo1ColorDarkIconPosition?: CSSProperties["position"];
};

const Logo1ColorDark7: FunctionComponent<Logo1ColorDark7Type> = ({
  logo1ColorDark7Logo1Color,
  logo1ColorDarkIconWidth,
  logo1ColorDarkIconPosition,
}) => {
  const logo1ColorDarkIcon1Style: CSSProperties = useMemo(() => {
    return {
      width: logo1ColorDarkIconWidth,
      position: logo1ColorDarkIconPosition,
    };
  }, [logo1ColorDarkIconWidth, logo1ColorDarkIconPosition]);

  return (
    <img
      className={styles.logo1ColordarkIcon}
      alt=""
      src={logo1ColorDark7Logo1Color}
      style={logo1ColorDarkIcon1Style}
    />
  );
};

export default Logo1ColorDark7;
