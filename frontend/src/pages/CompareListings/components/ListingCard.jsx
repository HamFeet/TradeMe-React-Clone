import styles from "./ListingCard.module.css";
import ListingImage from "./ListingImage";
import ListingInfo from "./ListingInfo";
import ListingStats from "./ListingStats";

/**
 * Day 2:
 * ListingCard now uses three visual sub-components.
 */
export default function ListingCard({
  title = "Coffee Table wooden",
  image = "/example-table.jpg",
  location = "Auckland City, Auckland",
  closes = "Wed 18 Dec, 8:30 pm",
  views = 177,
  watchers = 15,
}) {
  return (
    <div className={styles.card}>
      <ListingImage image={image} />
      <ListingInfo title={title} location={location} closes={closes} />
      <ListingStats views={views} watchers={watchers} />
    </div>
  );
}
