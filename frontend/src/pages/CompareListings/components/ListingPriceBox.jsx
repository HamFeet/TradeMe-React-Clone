import styles from "./ListingCard.module.css";

/**
 * ListingPriceBox
 * - Displays buy now, bid, and buttons.
 */
export default function ListingPriceBox({
  price = 79.9,
  bid = 45.0,
  reserve = "Reserve met",
}) {
  return (
    <div className={styles.priceBox}>
      <p className={styles.priceLabel}>Buy now</p>
      <h3 className={styles.price}>${price.toFixed(2)}</h3>
      <button className={styles.buyBtn}>Buy Now</button>

      <a href="#" className={styles.link}>
        Add to Cart
      </a>

      <p className={styles.currentBid}>
        Current bid <strong>${price.toFixed(2)}</strong>
      </p>
      <p>Your bid: ${bid.toFixed(2)}</p>
      <p>{reserve}</p>

      <button className={styles.placeBid}>Place bid</button>
    </div>
  );
}
