import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Logo2ColorDark2.module.css";

export type Logo2ColorDark2Type = {
  /** Style props */
  logo2ColorDarkIconPosition?: CSSProperties["position"];
};

const Logo2ColorDark2: FunctionComponent<Logo2ColorDark2Type> = ({
  logo2ColorDarkIconPosition,
}) => {
  const logo2ColorDarkIcon3Style: CSSProperties = useMemo(() => {
    return {
      position: logo2ColorDarkIconPosition,
    };
  }, [logo2ColorDarkIconPosition]);

  return (
    <img
      className={styles.logo2ColordarkIcon}
      alt=""
      src="/logo2-colordark1.svg"
      style={logo2ColorDarkIcon3Style}
    />
  );
};

export default Logo2ColorDark2;
