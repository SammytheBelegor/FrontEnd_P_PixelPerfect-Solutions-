import { FunctionComponent } from "react";
import styles from "./BreakpointDesktop26.module.css";

export type BreakpointDesktop26Type = {
  fAQs?: string;
  text?: string;
  button?: string;
  question?: string;
  question1?: string;
  question2?: string;
  question3?: string;
  question4?: string;
};

const BreakpointDesktop26: FunctionComponent<BreakpointDesktop26Type> = ({
  fAQs,
  text,
  button,
  question,
  question1,
  question2,
  question3,
  question4,
}) => {
  return (
    <div className={styles.breakpointDesktop}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <div className={styles.content}>
            <b className={styles.faqs}>{fAQs}</b>
            <div className={styles.text}>{text}</div>
          </div>
          <div className={styles.stylesecondarySmallfalse}>
            <div className={styles.button}>{button}</div>
          </div>
        </div>
        <div className={styles.accordion}>
          <div className={styles.accordionItem}>
            <div className={styles.divider} />
            <div className={styles.title}>
              <b className={styles.question}>{question}</b>
              <img className={styles.icon} alt="" src="/icon2.svg" />
            </div>
          </div>
          <div className={styles.accordionItem}>
            <div className={styles.divider} />
            <div className={styles.title}>
              <b className={styles.question}>{question1}</b>
              <img className={styles.icon} alt="" src="/icon2.svg" />
            </div>
          </div>
          <div className={styles.accordionItem}>
            <div className={styles.divider} />
            <div className={styles.title}>
              <b className={styles.question}>{question2}</b>
              <img className={styles.icon} alt="" src="/icon2.svg" />
            </div>
          </div>
          <div className={styles.accordionItem}>
            <div className={styles.divider} />
            <div className={styles.title}>
              <b className={styles.question}>{question3}</b>
              <img className={styles.icon} alt="" src="/icon2.svg" />
            </div>
          </div>
          <div className={styles.accordionItem}>
            <div className={styles.divider} />
            <div className={styles.title}>
              <b className={styles.question}>{question4}</b>
              <img className={styles.icon} alt="" src="/icon2.svg" />
            </div>
          </div>
          <div className={styles.divider} />
        </div>
      </div>
    </div>
  );
};

export default BreakpointDesktop26;
