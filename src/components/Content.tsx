import { FunctionComponent } from "react";
import ColorDark from "./ColorDark";
import StyleSecondarySmallTrueD from "./StyleSecondarySmallTrueD";
import styles from "./Content.module.css";

export type ContentType = {
  linkOne?: string;
  linkTwo?: string;
  linkThree?: string;
  linkFour?: string;
  button?: string;
  button1?: string;
};

const Content: FunctionComponent<ContentType> = ({
  linkOne,
  linkTwo,
  linkThree,
  linkFour,
  button,
  button1,
}) => {
  return (
    <div className={styles.content}>
      <div className={styles.content1}>
        <ColorDark colorDarkPosition="relative" />
        <div className={styles.column}>
          <div className={styles.linkOne}>{linkOne}</div>
          <div className={styles.linkOne}>{linkTwo}</div>
          <div className={styles.linkOne}>{linkThree}</div>
          <div className={styles.navLinkDropdown}>
            <div className={styles.linkOne}>{linkFour}</div>
            <img
              className={styles.chevronDownIcon}
              alt=""
              src="/chevron-down.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <StyleSecondarySmallTrueD buttonText="Sign Up" />
        <div className={styles.styleprimarySmalltrueDar}>
          <div className={styles.linkOne}>{button1}</div>
        </div>
      </div>
    </div>
  );
};

export default Content;
