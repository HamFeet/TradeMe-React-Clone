import React from "react";
import styles from "./AuctionCard.module.css";
import WishlistButton from "../WishlistButton/WishlistButton.jsx";

function money(n) {
  if (typeof n !== "number") return "-";
  return new Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: "NZD",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function AuctionCard({ item }) {
  const listed = item?.createdAt
    ? new Date(item.createdAt).toLocaleDateString()
    : "—";

  return (
    <article className={styles.card}>
      {/* top-right wishlist */}
      <div className={styles.cardWishlist}>
        <WishlistButton
          itemId={item?._id}
          defaultActive={false}
          size={50}
          onToggle={(active, id) => {
            // TODO: hook into your API or localStorage
            console.log("wishlist:", { id, active });
          }}
        />
      </div>

      {/* image placeholder */}
      <div className={styles.image} />

      {/* meta row */}
      <div className={styles.metaRow}>
        <span className={styles.metaPill}>Aotearoa NZ</span>
        <span className={styles.metaSpacer} />
        <span className={styles.metaText}>Listed: {listed}</span>
      </div>

      {/* title */}
      <h3 className={styles.title} title={item?.title}>
        {item?.title}
      </h3>

      {/* prices */}
      <div className={styles.prices}>
        <div>
          <div className={styles.priceLabel}>Start price</div>
          <div className={styles.priceValue}>{money(item?.start_price)}</div>
        </div>
        <div>
          <div className={styles.priceLabel}>Reserve price</div>
          <div className={styles.priceValue}>{money(item?.reserve_price)}</div>
        </div>
      </div>
    </article>
  );
}
