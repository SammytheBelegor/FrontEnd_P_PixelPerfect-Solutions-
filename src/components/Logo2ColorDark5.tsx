import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Logo2ColorDark5.module.css";

export type Logo2ColorDark5Type = {
  /** Style props */
  logo2ColorDarkIconPosition?: CSSProperties["position"];
};

const Logo2ColorDark5: FunctionComponent<Logo2ColorDark5Type> = ({
  logo2ColorDarkIconPosition,
}) => {
  const logo2ColorDarkIcon5Style: CSSProperties = useMemo(() => {
    return {
      position: logo2ColorDarkIconPosition,
    };
  }, [logo2ColorDarkIconPosition]);

  return (
    <img
      className={styles.logo2ColordarkIcon}
      alt=""
      src="/logo2-colordark1.svg"
      style={logo2ColorDarkIcon5Style}
    />
  );
};

export default Logo2ColorDark5;
