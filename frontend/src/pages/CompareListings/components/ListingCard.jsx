import styles from "./ListingCard.module.css";

/**
 * Day 1: Placeholder for a single listing.
 * - Only basic box + title for now.
 * - Subcomponents will be added on Day 2.
 */
export default function ListingCard({ title }) {
  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}>Image area</div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.location}>Auckland City, Auckland</p>
      <p className={styles.info}>Closes: Wed 18 Dec, 8:30 pm</p>
    </div>
  );
}
