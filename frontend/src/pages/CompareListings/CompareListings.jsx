import { useEffect, useState } from "react";
import styles from "./CompareListings.module.css";
import ListingCard from "./components/ListingCard";
import CompareListingsFooter from "./components/CompareListingsFooter";

// Base URL  API ( .env or  localhost )
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

/**
 * CompareListings – full page including the new footer.
 */
export default function CompareListings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // call items MongoDB
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/items`);

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();

        
        const itemsArray = Array.isArray(data) ? data : data.results || [];

        setListings(itemsArray);
      } catch (err) {
        console.error("Error fetching listings:", err);
        setError("Failed to load listings. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  if (loading) {
    return (
      <div className={styles.container}>
        <header className={styles.pageHeader}>
          <h1 className={styles.title}>Compare listings</h1>
        </header>
        <p>Loading listings...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <header className={styles.pageHeader}>
          <h1 className={styles.title}>Compare listings</h1>
        </header>
        <p>{error}</p>
      </div>
    );
  }

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
        {listings.slice(0, 2).map((item) => (
          <ListingCard
            key={item._id || item.id}
            title={item.title}
            
            item={item}
          />
        ))}
      </section>

      {/* Use the small footer component here */}
      <CompareListingsFooter />
    </div>
  );
}
