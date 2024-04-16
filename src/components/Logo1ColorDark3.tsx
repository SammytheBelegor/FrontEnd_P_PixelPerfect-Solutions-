import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Logo1ColorDark3.module.css";

export type Logo1ColorDark3Type = {
  /** Style props */
  logo1ColorDarkIconPosition?: CSSProperties["position"];
};

const Logo1ColorDark3: FunctionComponent<Logo1ColorDark3Type> = ({
  logo1ColorDarkIconPosition,
}) => {
  const logo1ColorDarkIcon4Style: CSSProperties = useMemo(() => {
    return {
      position: logo1ColorDarkIconPosition,
    };
  }, [logo1ColorDarkIconPosition]);

  return (
    <img
      className={styles.logo1ColordarkIcon}
      alt=""
      src="/logo1-colordark.svg"
      style={logo1ColorDarkIcon4Style}
    />
  );
};

export default Logo1ColorDark3;
