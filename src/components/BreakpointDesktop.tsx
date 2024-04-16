import { FunctionComponent } from "react";
import styles from "./BreakpointDesktop.module.css";

export type BreakpointDesktopType = {
  mediumLengthHeroHeadlineG?: string;
  loremIpsumDolorSitAmetCon?: string;
  button?: string;
  button1?: string;
};

const BreakpointDesktop: FunctionComponent<BreakpointDesktopType> = ({
  mediumLengthHeroHeadlineG,
  loremIpsumDolorSitAmetCon,
  button,
  button1,
}) => {
  return (
    <div className={styles.breakpointDesktop}>
      <div className={styles.column}>
        <div className={styles.content}>
          <b className={styles.mediumLengthHero}>{mediumLengthHeroHeadlineG}</b>
          <div className={styles.loremIpsumDolor}>
            {loremIpsumDolorSitAmetCon}
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.styleprimarySmallfalseDa}>
            <div className={styles.button}>{button}</div>
          </div>
          <div className={styles.stylesecondarySmallfalse}>
            <div className={styles.button}>{button1}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakpointDesktop;
