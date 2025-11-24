import styles from "../CompareListings.module.css";

/**
 * CompareListingsFooter
 * - Small footer message for the Compare Listings page.
 * - Keeps main CompareListings.jsx clean.
 */
export default function CompareListingsFooter() {
  return (
    <footer className={styles.footerNote}>
      <p>We are upgrading some of our systems</p>
      <div className={styles.links}>
        <a href="#">Learn more</a>
        <a href="#">Tell us what you think</a>
      </div>
    </footer>
  );
}
