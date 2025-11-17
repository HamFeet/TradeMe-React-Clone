import styles from "./CompareListings.module.css";
import ListingCard from "./components/ListingCard";

/**
 * Day 1: CompareListings page skeleton.
 * - Defines the main layout.
 * - Renders header, two mock cards, and footer note.
 */
export default function CompareListings() {
  const listings = [
    { id: 1, title: "Coffee Table wooden" },
    { id: 2, title: "Coffee Table wooden" },
  ];

  return (
    <div className={styles.container}>
      {/* Header section */}
      <header className={styles.pageHeader}>
        <h1 className={styles.title}>Compare listings</h1>

        <div className={styles.actions}>
          <button className={styles.backBtn}>← Back to search</button>
          <a href="#" className={styles.removeAll}>
            Remove all
          </a>
        </div>
      </header>

      {/* Listings grid */}
      <section className={styles.grid}>
        {listings.map((item) => (
          <ListingCard key={item.id} title={item.title} />
        ))}
      </section>

      {/* Bottom note */}
      <footer className={styles.footerNote}>
        <p>We are upgrading some of our systems</p>
        <div className={styles.links}>
          <a href="#">Learn more</a>
          <a href="#">Tell us what you think</a>
        </div>
      </footer>
    </div>
  );
}
