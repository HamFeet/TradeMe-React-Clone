import styles from "./CompareListings.module.css";
import ListingCard from "./components/ListingCard";
import CompareListingsFooter from "./components/CompareListingsFooter";

/**
 * CompareListings – full page including the new footer.
 */
export default function CompareListings() {
  const listings = [
    { id: 1, title: "Coffee Table wooden" },
    { id: 2, title: "Coffee Table wooden" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.pageHeader}>
        <h1 className={styles.title}>Compare listings</h1>
        <div className={styles.actions}>
          <button className={styles.backBtn}>← Back to search</button>
          <a href="#" className={styles.removeAll}>
            Remove all
          </a>
        </div>
      </header>

      <section className={styles.grid}>
        {listings.map((item) => (
          <ListingCard key={item.id} title={item.title} />
        ))}
      </section>

      {/* Use the small footer component here */}
      <CompareListingsFooter />
    </div>
  );
}
