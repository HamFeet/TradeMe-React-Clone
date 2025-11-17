import styles from "./ListingCard.module.css";

/**
 * ListingInfo
 * - Displays location, title, and closing info.
 */
export default function ListingInfo({ location, title, closes }) {
  return (
    <div className={styles.infoBlock}>
      <p className={styles.location}>{location}</p>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.closes}>Closes: {closes}</p>
    </div>
  );
}
