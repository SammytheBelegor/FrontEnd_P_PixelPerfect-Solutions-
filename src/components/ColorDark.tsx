import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ColorDark.module.css";

export type ColorDarkType = {
  /** Style props */
  colorDarkPosition?: CSSProperties["position"];
};

const ColorDark: FunctionComponent<ColorDarkType> = ({ colorDarkPosition }) => {
  const colorDark1Style: CSSProperties = useMemo(() => {
    return {
      position: colorDarkPosition,
    };
  }, [colorDarkPosition]);

  return (
    <img
      className={styles.colorDark}
      alt=""
      src="/color--dark.svg"
      style={colorDark1Style}
    />
  );
};

export default ColorDark;
