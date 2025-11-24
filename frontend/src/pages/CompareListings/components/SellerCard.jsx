import styles from "./ListingCard.module.css";

/**
 * SellerCard
 * - Shows seller info, rating, and Visit Shop button.
 */
export default function SellerCard({
  name = "Ashley",
  rating = 4.9,
  reviews = 75287,
  location = "Auckland City, Auckland",
}) {
  return (
    <div className={styles.seller}>
      <h4>{name}</h4>
      <p>
        ⭐ {rating} ({reviews.toLocaleString()} reviews)
      </p>
      <p>Seller located in {location}</p>
      <button className={styles.visitBtn}>Visit Shop</button>
    </div>
  );
}
