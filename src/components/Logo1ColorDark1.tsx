import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Logo1ColorDark1.module.css";

export type Logo1ColorDark1Type = {
  /** Style props */
  logo1ColorDarkIconPosition?: CSSProperties["position"];
};

const Logo1ColorDark1: FunctionComponent<Logo1ColorDark1Type> = ({
  logo1ColorDarkIconPosition,
}) => {
  const logo1ColorDarkIcon3Style: CSSProperties = useMemo(() => {
    return {
      position: logo1ColorDarkIconPosition,
    };
  }, [logo1ColorDarkIconPosition]);

  return (
    <img
      className={styles.logo1ColordarkIcon}
      alt=""
      src="/logo1-colordark.svg"
      style={logo1ColorDarkIcon3Style}
    />
  );
};

export default Logo1ColorDark1;
