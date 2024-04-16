import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Logo1ColorDark2.module.css";

export type Logo1ColorDark2Type = {
  /** Style props */
  logo1ColorDarkIconPosition?: CSSProperties["position"];
};

const Logo1ColorDark2: FunctionComponent<Logo1ColorDark2Type> = ({
  logo1ColorDarkIconPosition,
}) => {
  const logo1ColorDarkIcon5Style: CSSProperties = useMemo(() => {
    return {
      position: logo1ColorDarkIconPosition,
    };
  }, [logo1ColorDarkIconPosition]);

  return (
    <img
      className={styles.logo1ColordarkIcon}
      alt=""
      src="/logo1-colordark.svg"
      style={logo1ColorDarkIcon5Style}
    />
  );
};

export default Logo1ColorDark2;
