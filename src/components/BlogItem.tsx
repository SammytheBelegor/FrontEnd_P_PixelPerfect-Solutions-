import { FunctionComponent } from "react";
import styles from "./BlogItem.module.css";

export type BlogItemType = {
  placeholderImage?: string;
  articleTitle?: string;
};

const BlogItem: FunctionComponent<BlogItemType> = ({
  placeholderImage,
  articleTitle,
}) => {
  return (
    <div className={styles.blogItem}>
      <img
        className={styles.placeholderImageIcon}
        alt=""
        src={placeholderImage}
      />
      <div className={styles.content}>
        <div className={styles.content1}>
          <div className={styles.articleTitle}>{articleTitle}</div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
        <div className={styles.readMore}>Read more</div>
      </div>
    </div>
  );
};

export default BlogItem;
