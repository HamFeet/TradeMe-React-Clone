import styles from "./ListingCard.module.css";
import ListingImage from "./ListingImage";
import ListingInfo from "./ListingInfo";
import ListingStats from "./ListingStats";
import ListingPriceBox from "./ListingPriceBox";
import ListingOverview from "./ListingOverview";
import SellerCard from "./SellerCard";


export default function ListingCard({ item, title }) {
  // Tittle
  const displayTitle = title || item?.title || "Untitled item";

  // Location: city + region
  const location =
    item?.city && item?.region
      ? `${item.city}, ${item.region}`
      : "Location not specified";

  // Closes date: format closesAt
  let closesText = "Closes: Closes date not set";
  if (item?.closesAt) {
    const closesDate = new Date(item.closesAt);
    if (!isNaN(closesDate.getTime())) {
      const formatted = closesDate.toLocaleString("en-NZ", {
        weekday: "short",
        day: "numeric",
        month: "short",
        hour: "numeric",
        minute: "2-digit",
      });
      closesText = `Closes: ${formatted}`;
    }
  }

  // Views y watchers
  const views = item?.views ?? 0;
  const watchers = item?.watchers ?? 0;

  // Price
  const price = item?.startPrice ?? 0;
  const bid = item?.reservePrice ?? price;

  // Img
  const image = item?.imagePath || "";

  // ⭐ Seller 
  const seller = item?.seller;

  return (
    <div className={styles.card}>
      <ListingImage image={image} />

      <ListingInfo
        title={displayTitle}
        location={location}
        closes={closesText}
      />

      <ListingStats views={views} watchers={watchers} />

      <ListingPriceBox price={price} bid={bid} />

      <ListingOverview
        condition={item?.condition}
        colour={item?.colour}
        dimensions={item?.dimensions}
      />

      {/* Seller */}
       <SellerCard seller={item?.seller} />
    </div>
  );
}
