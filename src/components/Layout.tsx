import { FunctionComponent } from "react";
import StyleSecondarySmallFalse1 from "./StyleSecondarySmallFalse1";
import StyleLinkSmallFalseDark1 from "./StyleLinkSmallFalseDark1";
import styles from "./Layout.module.css";

const Layout: FunctionComponent = () => {
  return (
    <div className={styles.layout4}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content1}>
            <div className={styles.sectionTitle}>
              <div className={styles.subheading}>Innovative</div>
              <div className={styles.content2}>
                <b className={styles.heading}>
                  Transforming Websites with Stunning Design and Functionality
                </b>
                <div className={styles.text}>
                  At PixelPerfect Solutions, we specialize in creating visually
                  stunning and user-friendly websites that leave a lasting
                  impression. Our team of experts combines creativity and
                  technical expertise to deliver websites that not only look
                  great but also perform seamlessly.
                </div>
              </div>
            </div>
            <div className={styles.list}>
              <div className={styles.listItem}>
                <b className={styles.subheadingOne}>Expertise</b>
                <div className={styles.text1}>
                  Our team of experienced designers and developers ensure that
                  every website we create is pixel-perfect.
                </div>
              </div>
              <div className={styles.listItem}>
                <b className={styles.subheadingOne}>Customization</b>
                <div className={styles.text1}>
                  We understand that every business is unique, and we tailor our
                  solutions to meet your specific needs.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.actions}>
            <StyleSecondarySmallFalse1 buttonText="Learn More" />
            <StyleLinkSmallFalseDark1
              button="Contact Us"
              iconRelume="/icon--chevronright.svg"
            />
          </div>
        </div>
        <img
          className={styles.placeholderImageIcon}
          alt=""
          src="/placeholder-image1@2x.png"
        />
      </div>
    </div>
  );
};

export default Layout;
