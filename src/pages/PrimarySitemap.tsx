import { FunctionComponent } from "react";
import AboutUsContainer1 from "../components/AboutUsContainer1";
import AboutUsContainer from "../components/AboutUsContainer";
import AboutUsCard1 from "../components/AboutUsCard1";
import AboutUsCard from "../components/AboutUsCard";
import styles from "./PrimarySitemap.module.css";

const PrimarySitemap: FunctionComponent = () => {
  return (
    <div className={styles.primarySitemap}>
      <div className={styles.home}>
        <AboutUsContainer1 />
      </div>
      <div className={styles.aboutUs}>
        <AboutUsContainer />
      </div>
      <div className={styles.services}>
        <AboutUsCard1 />
      </div>
      <div className={styles.portfolio}>
        <AboutUsCard />
      </div>
    </div>
  );
};

export default PrimarySitemap;
