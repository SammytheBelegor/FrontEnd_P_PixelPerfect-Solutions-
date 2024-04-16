import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ColorDark1.module.css";

export type ColorDark1Type = {
  /** Style props */
  colorDarkPosition?: CSSProperties["position"];
};

const ColorDark1: FunctionComponent<ColorDark1Type> = ({
  colorDarkPosition,
}) => {
  const colorDarkStyle: CSSProperties = useMemo(() => {
    return {
      position: colorDarkPosition,
    };
  }, [colorDarkPosition]);

  return (
    <img
      className={styles.colorDark}
      alt=""
      src="/color--dark.svg"
      style={colorDarkStyle}
    />
  );
};

export default ColorDark1;
