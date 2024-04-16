import { FunctionComponent } from "react";
import styles from "./BreakpointDesktop23.module.css";

export type BreakpointDesktop23Type = {
  subheading?: string;
  heading?: string;
  text?: string;
  heading1?: string;
  text1?: string;
  tagOne?: string;
  tagTwo?: string;
  tagThree?: string;
  heading2?: string;
  text2?: string;
  tagOne1?: string;
  tagTwo1?: string;
  tagThree1?: string;
  heading3?: string;
  text3?: string;
  tagOne2?: string;
  tagTwo2?: string;
  tagThree2?: string;
  heading4?: string;
  text4?: string;
  tagOne3?: string;
  tagTwo3?: string;
  tagThree3?: string;
  heading5?: string;
  text5?: string;
  tagOne4?: string;
  tagTwo4?: string;
  tagThree4?: string;
  heading6?: string;
  text6?: string;
  tagOne5?: string;
  tagTwo5?: string;
  tagThree5?: string;
};

const BreakpointDesktop23: FunctionComponent<BreakpointDesktop23Type> = ({
  subheading,
  heading,
  text,
  heading1,
  text1,
  tagOne,
  tagTwo,
  tagThree,
  heading2,
  text2,
  tagOne1,
  tagTwo1,
  tagThree1,
  heading3,
  text3,
  tagOne2,
  tagTwo2,
  tagThree2,
  heading4,
  text4,
  tagOne3,
  tagTwo3,
  tagThree3,
  heading5,
  text5,
  tagOne4,
  tagTwo4,
  tagThree4,
  heading6,
  text6,
  tagOne5,
  tagTwo5,
  tagThree5,
}) => {
  return (
    <div className={styles.breakpointDesktop}>
      <div className={styles.sectionTitle}>
        <div className={styles.subheading}>{subheading}</div>
        <div className={styles.content}>
          <b className={styles.heading}>{heading}</b>
          <div className={styles.text}>{text}</div>
        </div>
      </div>
      <div className={styles.content1}>
        <div className={styles.portfolioList}>
          <div className={styles.column}>
            <div className={styles.card}>
              <img
                className={styles.placeholderImageIcon}
                alt=""
                src="/placeholder-image9@2x.png"
              />
              <div className={styles.content2}>
                <div className={styles.text1}>
                  <b className={styles.heading1}>{heading1}</b>
                  <div className={styles.text2}>{text1}</div>
                </div>
                <div className={styles.tags}>
                  <div className={styles.tag}>
                    <div className={styles.subheading}>{tagOne}</div>
                  </div>
                  <div className={styles.tag}>
                    <div className={styles.subheading}>{tagTwo}</div>
                  </div>
                  <div className={styles.tag}>
                    <div className={styles.subheading}>{tagThree}</div>
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
            <div className={styles.card}>
              <img
                className={styles.placeholderImageIcon}
                alt=""
                src="/placeholder-image9@2x.png"
              />
              <div className={styles.content2}>
                <div className={styles.text1}>
                  <b className={styles.heading1}>{heading2}</b>
                  <div className={styles.text2}>{text2}</div>
                </div>
                <div className={styles.tags}>
                  <div className={styles.tag}>
                    <div className={styles.subheading}>{tagOne1}</div>
                  </div>
                  <div className={styles.tag}>
                    <div className={styles.subheading}>{tagTwo1}</div>
                  </div>
                  <div className={styles.tag}>
                    <div className={styles.subheading}>{tagThree1}</div>
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
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <img
                className={styles.placeholderImageIcon2}
                alt=""
                src="/placeholder-image10@2x.png"
              />
              <div className={styles.content2}>
                <div className={styles.text1}>
                  <b className={styles.heading1}>{heading3}</b>
                  <div className={styles.text2}>{text3}</div>
                </div>
                <div className={styles.tags}>
                  <div className={styles.tag}>
                    <div className={styles.subheading}>{tagOne2}</div>
                  </div>
                  <div className={styles.tag}>
                    <div className={styles.subheading}>{tagTwo2}</div>
                  </div>
                  <div className={styles.tag}>
                    <div className={styles.subheading}>{tagThree2}</div>
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
            <div className={styles.card}>
              <img
                className={styles.placeholderImageIcon}
                alt=""
                src="/placeholder-image9@2x.png"
              />
              <div className={styles.content2}>
                <div className={styles.text1}>
                  <b className={styles.heading1}>{heading4}</b>
                  <div className={styles.text2}>{text4}</div>
                </div>
                <div className={styles.tags}>
                  <div className={styles.tag}>
                    <div className={styles.subheading}>{tagOne3}</div>
                  </div>
                  <div className={styles.tag}>
                    <div className={styles.subheading}>{tagTwo3}</div>
                  </div>
                  <div className={styles.tag}>
                    <div className={styles.subheading}>{tagThree3}</div>
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
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <img
                className={styles.placeholderImageIcon}
                alt=""
                src="/placeholder-image9@2x.png"
              />
              <div className={styles.content2}>
                <div className={styles.text1}>
                  <b className={styles.heading1}>{heading5}</b>
                  <div className={styles.text2}>{text5}</div>
                </div>
                <div className={styles.tags}>
                  <div className={styles.tag}>
                    <div className={styles.subheading}>{tagOne4}</div>
                  </div>
                  <div className={styles.tag}>
                    <div className={styles.subheading}>{tagTwo4}</div>
                  </div>
                  <div className={styles.tag}>
                    <div className={styles.subheading}>{tagThree4}</div>
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
            <div className={styles.card}>
              <img
                className={styles.placeholderImageIcon}
                alt=""
                src="/placeholder-image9@2x.png"
              />
              <div className={styles.content2}>
                <div className={styles.text1}>
                  <b className={styles.heading1}>{heading6}</b>
                  <div className={styles.text2}>{text6}</div>
                </div>
                <div className={styles.tags}>
                  <div className={styles.tag}>
                    <div className={styles.subheading}>{tagOne5}</div>
                  </div>
                  <div className={styles.tag}>
                    <div className={styles.subheading}>{tagTwo5}</div>
                  </div>
                  <div className={styles.tag}>
                    <div className={styles.subheading}>{tagThree5}</div>
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
          </div>
        </div>
        <div className={styles.stylesecondarySmallfalse}>
          <div className={styles.button}>View all</div>
        </div>
      </div>
    </div>
  );
};

export default BreakpointDesktop23;
