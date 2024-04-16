import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Logo2ColorDark3.module.css";

export type Logo2ColorDark3Type = {
  /** Style props */
  logo2ColorDarkIconPosition?: CSSProperties["position"];
};

const Logo2ColorDark3: FunctionComponent<Logo2ColorDark3Type> = ({
  logo2ColorDarkIconPosition,
}) => {
  const logo2ColorDarkIcon2Style: CSSProperties = useMemo(() => {
    return {
      position: logo2ColorDarkIconPosition,
    };
  }, [logo2ColorDarkIconPosition]);

  return (
    <img
      className={styles.logo2ColordarkIcon}
      alt=""
      src="/logo2-colordark1.svg"
      style={logo2ColorDarkIcon2Style}
    />
  );
};

export default Logo2ColorDark3;
