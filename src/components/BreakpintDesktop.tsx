import { FunctionComponent } from "react";
import styles from "./BreakpintDesktop.module.css";

export type BreakpintDesktopType = {
  linkOne?: string;
  linkTwo?: string;
  linkThree?: string;
  linkFour?: string;
  button?: string;
  button1?: string;
  pageGroupOne?: string;
  pageOne?: string;
  loremIpsumDolorSitAmetCon?: string;
  pageTwo?: string;
  loremIpsumDolorSitAmetCon1?: string;
  pageThree?: string;
  loremIpsumDolorSitAmetCon2?: string;
  pageFour?: string;
  loremIpsumDolorSitAmetCon3?: string;
  pageGroupTwo?: string;
  pageFive?: string;
  loremIpsumDolorSitAmetCon4?: string;
  pageSix?: string;
  loremIpsumDolorSitAmetCon5?: string;
  pageSeven?: string;
  loremIpsumDolorSitAmetCon6?: string;
  pageEight?: string;
  loremIpsumDolorSitAmetCon7?: string;
  featuredFromBlog?: string;
  placeholderImage?: string;
  articleTitle?: string;
  placeholderImage1?: string;
  articleTitle1?: string;
  button2?: string;
};

const BreakpintDesktop: FunctionComponent<BreakpintDesktopType> = ({
  linkOne,
  linkTwo,
  linkThree,
  linkFour,
  button,
  button1,
  pageGroupOne,
  pageOne,
  loremIpsumDolorSitAmetCon,
  pageTwo,
  loremIpsumDolorSitAmetCon1,
  pageThree,
  loremIpsumDolorSitAmetCon2,
  pageFour,
  loremIpsumDolorSitAmetCon3,
  pageGroupTwo,
  pageFive,
  loremIpsumDolorSitAmetCon4,
  pageSix,
  loremIpsumDolorSitAmetCon5,
  pageSeven,
  loremIpsumDolorSitAmetCon6,
  pageEight,
  loremIpsumDolorSitAmetCon7,
  featuredFromBlog,
  placeholderImage,
  articleTitle,
  placeholderImage1,
  articleTitle1,
  button2,
}) => {
  return (
    <div className={styles.breakpintDesktop}>
      <div className={styles.content}>
        <div className={styles.content1}>
          <img className={styles.colorDark} alt="" src="/color--dark.svg" />
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
          <div className={styles.stylesecondarySmalltrueD}>
            <div className={styles.linkOne}>{button}</div>
          </div>
          <div className={styles.styleprimarySmalltrueDar}>
            <div className={styles.linkOne}>{button1}</div>
          </div>
        </div>
      </div>
      <div className={styles.megaMenu}>
        <div className={styles.menu}>
          <div className={styles.menuList}>
            <div className={styles.pageGroupOne}>{pageGroupOne}</div>
            <div className={styles.menuItem}>
              <img
                className={styles.chevronDownIcon}
                alt=""
                src="/icon--relume.svg"
              />
              <div className={styles.content2}>
                <div className={styles.pageOne}>{pageOne}</div>
                <div className={styles.loremIpsumDolor}>
                  {loremIpsumDolorSitAmetCon}
                </div>
              </div>
            </div>
            <div className={styles.menuItem}>
              <img
                className={styles.chevronDownIcon}
                alt=""
                src="/icon--relume.svg"
              />
              <div className={styles.content2}>
                <div className={styles.pageOne}>{pageTwo}</div>
                <div className={styles.loremIpsumDolor}>
                  {loremIpsumDolorSitAmetCon1}
                </div>
              </div>
            </div>
            <div className={styles.menuItem}>
              <img
                className={styles.chevronDownIcon}
                alt=""
                src="/icon--relume.svg"
              />
              <div className={styles.content2}>
                <div className={styles.pageOne}>{pageThree}</div>
                <div className={styles.loremIpsumDolor}>
                  {loremIpsumDolorSitAmetCon2}
                </div>
              </div>
            </div>
            <div className={styles.menuItem}>
              <img
                className={styles.chevronDownIcon}
                alt=""
                src="/icon--relume.svg"
              />
              <div className={styles.content2}>
                <div className={styles.pageOne}>{pageFour}</div>
                <div className={styles.loremIpsumDolor}>
                  {loremIpsumDolorSitAmetCon3}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.menuList}>
            <div className={styles.pageGroupOne}>{pageGroupTwo}</div>
            <div className={styles.menuItem}>
              <img
                className={styles.chevronDownIcon}
                alt=""
                src="/icon--relume.svg"
              />
              <div className={styles.content2}>
                <div className={styles.pageOne}>{pageFive}</div>
                <div className={styles.loremIpsumDolor}>
                  {loremIpsumDolorSitAmetCon4}
                </div>
              </div>
            </div>
            <div className={styles.menuItem}>
              <img
                className={styles.chevronDownIcon}
                alt=""
                src="/icon--relume.svg"
              />
              <div className={styles.content2}>
                <div className={styles.pageOne}>{pageSix}</div>
                <div className={styles.loremIpsumDolor}>
                  {loremIpsumDolorSitAmetCon5}
                </div>
              </div>
            </div>
            <div className={styles.menuItem}>
              <img
                className={styles.chevronDownIcon}
                alt=""
                src="/icon--relume.svg"
              />
              <div className={styles.content2}>
                <div className={styles.pageOne}>{pageSeven}</div>
                <div className={styles.loremIpsumDolor}>
                  {loremIpsumDolorSitAmetCon6}
                </div>
              </div>
            </div>
            <div className={styles.menuItem}>
              <img
                className={styles.chevronDownIcon}
                alt=""
                src="/icon--relume.svg"
              />
              <div className={styles.content2}>
                <div className={styles.pageOne}>{pageEight}</div>
                <div className={styles.loremIpsumDolor}>
                  {loremIpsumDolorSitAmetCon7}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blog}>
          <div className={styles.pageGroupOne}>{featuredFromBlog}</div>
          <div className={styles.blogList}>
            <div className={styles.blogItem}>
              <img
                className={styles.placeholderImageIcon}
                alt=""
                src={placeholderImage}
              />
              <div className={styles.content10}>
                <div className={styles.content11}>
                  <div className={styles.pageOne}>{articleTitle}</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                </div>
                <div className={styles.readMore}>Read more</div>
              </div>
            </div>
            <div className={styles.blogItem}>
              <img
                className={styles.placeholderImageIcon}
                alt=""
                src={placeholderImage1}
              />
              <div className={styles.content10}>
                <div className={styles.content11}>
                  <div className={styles.pageOne}>{articleTitle1}</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                </div>
                <div className={styles.readMore}>Read more</div>
              </div>
            </div>
          </div>
          <div className={styles.stylelinkSmallfalseDark}>
            <div className={styles.linkOne}>{button2}</div>
            <img
              className={styles.chevronDownIcon}
              alt=""
              src="/icon--chevronright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakpintDesktop;
