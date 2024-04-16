import { FunctionComponent } from "react";
import StylePrimarySmallFalseDa1 from "./StylePrimarySmallFalseDa1";
import StyleSecondarySmallFalse8 from "./StyleSecondarySmallFalse8";
import styles from "./CTA.module.css";

export type CTAType = {
  heading?: string;
  text?: string;
  button?: string;
  button1?: string;
  placeholderImage?: string;
};

const CTA: FunctionComponent<CTAType> = ({
  heading,
  text,
  button,
  button1,
  placeholderImage,
}) => {
  return (
    <div className={styles.cta1}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.content}>
            <b className={styles.heading}>{heading}</b>
            <div className={styles.text}>{text}</div>
          </div>
          <div className={styles.actions}>
            <StylePrimarySmallFalseDa1 buttonText="Contact" />
            <StyleSecondarySmallFalse8 buttonText="Request" />
          </div>
        </div>
        <img
          className={styles.placeholderImageIcon}
          alt=""
          src={placeholderImage}
        />
      </div>
    </div>
  );
};

export default CTA;
