import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Logo2ColorDark4.module.css";

export type Logo2ColorDark4Type = {
  /** Style props */
  logo2ColorDarkIconPosition?: CSSProperties["position"];
};

const Logo2ColorDark4: FunctionComponent<Logo2ColorDark4Type> = ({
  logo2ColorDarkIconPosition,
}) => {
  const logo2ColorDarkIcon4Style: CSSProperties = useMemo(() => {
    return {
      position: logo2ColorDarkIconPosition,
    };
  }, [logo2ColorDarkIconPosition]);

  return (
    <img
      className={styles.logo2ColordarkIcon}
      alt=""
      src="/logo2-colordark1.svg"
      style={logo2ColorDarkIcon4Style}
    />
  );
};

export default Logo2ColorDark4;
