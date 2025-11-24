import styles from "./ListingCard.module.css";

/**
 * ListingOverview
 * - Displays quick description & dimensions.
 */
export default function ListingOverview({
  condition = "Used",
  colour = "White",
  dimensions = "132 cm (L) × 72 cm (W) × 42 cm (H)",
}) {
  return (
    <div className={styles.overview}>
      <h4>Quick Overview</h4>
      <p>
        <strong>Condition:</strong> {condition}
      </p>
      <p>
        <strong>Colour:</strong> {colour}
      </p>
      <p>
        Enhance your living area with this sleek modern coffee table,
        crafted from durable materials, perfect for any space.
      </p>
      <p>
        <strong>Dimensions:</strong> {dimensions}
      </p>
      <button className={styles.fullListing}>See full listing</button>
    </div>
  );
}
