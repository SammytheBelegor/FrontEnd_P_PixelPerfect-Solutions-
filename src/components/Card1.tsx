import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Card1.module.css";

export type Card1Type = {
  placeholderImage?: string;
  heading?: string;
  text?: string;
  tagOne?: string;
  tagTwo?: string;
  tagThree?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propBorder?: CSSProperties["border"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propGap?: CSSProperties["gap"];
  propHeight?: CSSProperties["height"];
  propPadding?: CSSProperties["padding"];
};

const Card1: FunctionComponent<Card1Type> = ({
  placeholderImage,
  heading,
  text,
  tagOne,
  tagTwo,
  tagThree,
  propWidth,
  propBorder,
  propAlignSelf,
  propGap,
  propHeight,
  propPadding,
}) => {
  const cardStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      border: propBorder,
      alignSelf: propAlignSelf,
      gap: propGap,
    };
  }, [propWidth, propBorder, propAlignSelf, propGap]);

  const placeholderImageIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const contentStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.card} style={cardStyle}>
      <img
        className={styles.placeholderImageIcon}
        alt=""
        src={placeholderImage}
        style={placeholderImageIconStyle}
      />
      <div className={styles.content} style={contentStyle}>
        <div className={styles.text}>
          <b className={styles.heading}>{heading}</b>
          <div className={styles.text1}>{text}</div>
        </div>
        <div className={styles.tags}>
          <div className={styles.tag}>
            <div className={styles.tagOne}>{tagOne}</div>
          </div>
          <div className={styles.tag}>
            <div className={styles.tagOne}>{tagTwo}</div>
          </div>
          <div className={styles.tag}>
            <div className={styles.tagOne}>{tagThree}</div>
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.stylelinkSmallfalseDark}>
            <div className={styles.button}>View project</div>
            <img
              className={styles.iconChevronRight}
              alt=""
              src="/icon--chevronright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
