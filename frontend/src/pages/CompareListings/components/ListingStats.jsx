import { Eye, Heart, Share2 } from "lucide-react";
import styles from "./ListingCard.module.css";

/**
 * ListingStats
 * - Displays stats such as views, watchers, share & compare.
 */
export default function ListingStats({ views, watchers }) {
  return (
    <div className={styles.stats}>
      <span>
        <Eye size={14} /> {views} Views
      </span>
      <span>
        <Heart size={14} /> {watchers} watchlisted
      </span>
      <span>
        <Share2 size={14} /> Share
      </span>
      <span>Add to Compare</span>
    </div>
  );
}
