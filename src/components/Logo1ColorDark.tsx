import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Logo1ColorDark.module.css";

export type Logo1ColorDarkType = {
  /** Style props */
  logo1ColorDarkIconPosition?: CSSProperties["position"];
};

const Logo1ColorDark: FunctionComponent<Logo1ColorDarkType> = ({
  logo1ColorDarkIconPosition,
}) => {
  const logo1ColorDarkIcon2Style: CSSProperties = useMemo(() => {
    return {
      position: logo1ColorDarkIconPosition,
    };
  }, [logo1ColorDarkIconPosition]);

  return (
    <img
      className={styles.logo1ColordarkIcon}
      alt=""
      src="/logo1-colordark.svg"
      style={logo1ColorDarkIcon2Style}
    />
  );
};

export default Logo1ColorDark;
