import React from "react";
import styles from "./AuctionCard.module.css";

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
      {/* top-right “unfunctional” button */}
      <button
        type="button"
        className={styles.cornerBtn}
        aria-label="More options"
      />

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
