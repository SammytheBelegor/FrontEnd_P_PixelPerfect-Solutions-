import { FunctionComponent } from "react";
import ColorDark1 from "./ColorDark1";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <div className={styles.footer11}>
      <div className={styles.card}>
        <div className={styles.column}>
          <ColorDark1 colorDarkPosition="relative" />
          <div className={styles.content}>
            <div className={styles.content1}>
              <div className={styles.address}>Address:</div>
              <div className={styles.level112}>
                Level 1, 12 Sample St, Sydney NSW 2000
              </div>
            </div>
            <div className={styles.content1}>
              <div className={styles.address}>Contact:</div>
              <div className={styles.container}>
                <div className={styles.div}>1800 123 4567</div>
                <div className={styles.div}>info@relume.io</div>
              </div>
            </div>
            <div className={styles.socialLinks}>
              <img
                className={styles.iconFacebook}
                alt=""
                src="/icon--facebook.svg"
              />
              <img
                className={styles.iconFacebook}
                alt=""
                src="/icon--instagram.svg"
              />
              <img className={styles.iconFacebook} alt="" src="/icon--x.svg" />
              <img
                className={styles.iconFacebook}
                alt=""
                src="/icon--linkedin.svg"
              />
              <img
                className={styles.iconFacebook}
                alt=""
                src="/icon--youtube.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.column1}>
          <div className={styles.linkList}>
            <div className={styles.address}>Link One</div>
            <div className={styles.address}>Link Two</div>
            <div className={styles.address}>Link Three</div>
            <div className={styles.linkFour}>Link Four</div>
            <div className={styles.address}>Link Five</div>
          </div>
          <div className={styles.linkList}>
            <div className={styles.address}>Link Six</div>
            <div className={styles.address}>Link Seven</div>
            <div className={styles.address}>Link Eight</div>
            <div className={styles.address}>Link Nine</div>
            <div className={styles.address}>Link Ten</div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.relumeAllRights}>
            © 2024 Relume. All rights reserved.
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
            <div className={styles.privacyPolicy}>Terms of Service</div>
            <div className={styles.privacyPolicy}>Cookies Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
