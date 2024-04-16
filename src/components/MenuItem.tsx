import { FunctionComponent } from "react";
import styles from "./MenuItem.module.css";

export type MenuItemType = {
  pageOne?: string;
  loremIpsumDolorSitAmetCon?: string;
};

const MenuItem: FunctionComponent<MenuItemType> = ({
  pageOne,
  loremIpsumDolorSitAmetCon,
}) => {
  return (
    <div className={styles.menuItem}>
      <img className={styles.iconRelume} alt="" src="/icon--relume.svg" />
      <div className={styles.content}>
        <div className={styles.pageOne}>{pageOne}</div>
        <div className={styles.loremIpsumDolor}>
          {loremIpsumDolorSitAmetCon}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
