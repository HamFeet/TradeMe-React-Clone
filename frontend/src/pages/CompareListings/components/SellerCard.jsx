import styles from "./ListingCard.module.css";

/**
 * SellerCard
 * - Shows seller avatar, info, rating, and Visit Shop button.
 */
export default function SellerCard({ seller }) {
  const displayName = seller?.name || "Ashley";
  const displayRating = seller?.rating ?? 4.9;
  const displayReviews = seller?.reviews ?? 75287;
  const displayLocation =
    seller?.location || seller?.address || "Auckland City, Auckland";

  // Photo del seller:
  const avatarUrl =
    seller?.avatarUrl ||
    "https://via.placeholder.com/80x80.png?text=S";

  return (
    <div className={styles.seller}>
      <div className={styles.sellerHeader}>
        <img
          src={avatarUrl}
          alt={displayName}
          className={styles.sellerAvatar}
        />
        <div>
          <h4>{displayName}</h4>
          <p>⭐ {displayRating} ({displayReviews.toLocaleString()} reviews)</p>
        </div>
      </div>

      <p>Seller located in {displayLocation}</p>
      <button className={styles.visitBtn}>Visit Shop</button>
    </div>
  );
}
