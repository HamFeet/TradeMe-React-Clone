import styles from "./ListingCard.module.css";
import ListingImage from "./ListingImage";
import ListingInfo from "./ListingInfo";
import ListingStats from "./ListingStats";
import ListingPriceBox from "./ListingPriceBox";
import ListingOverview from "./ListingOverview";
import SellerCard from "./SellerCard";

/**
 * Day 3:
 * Complete ListingCard with all inner sections.
 */
export default function ListingCard(props) {
  return (
    <div className={styles.card}>
      <ListingImage image={props.image} />
      <ListingInfo
        title={props.title}
        location={props.location}
        closes={props.closes}
      />
      <ListingStats views={props.views} watchers={props.watchers} />
      <ListingPriceBox price={79.9} bid={45.0} />
      <ListingOverview />
      <SellerCard />
    </div>
  );
}
