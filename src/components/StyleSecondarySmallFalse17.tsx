import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StyleSecondarySmallFalse17.module.css";

export type StyleSecondarySmallFalse17Type = {
  button?: string;

  /** Style props */
  styleSecondarySmallFalseWidth?: CSSProperties["width"];
};

const StyleSecondarySmallFalse17: FunctionComponent<
  StyleSecondarySmallFalse17Type
> = ({ button, styleSecondarySmallFalseWidth }) => {
  const styleSecondarySmallFalseStyle: CSSProperties = useMemo(() => {
    return {
      width: styleSecondarySmallFalseWidth,
    };
  }, [styleSecondarySmallFalseWidth]);

  return (
    <div
      className={styles.stylesecondarySmallfalse}
      style={styleSecondarySmallFalseStyle}
    >
      <div className={styles.button}>{button}</div>
    </div>
  );
};

export default StyleSecondarySmallFalse17;
