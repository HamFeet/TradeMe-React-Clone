import { X } from "lucide-react";
import styles from "./ListingCard.module.css";

/**
 * ListingImage
 * - Shows the main image and a close (X) button.
 */
export default function ListingImage({ image }) {
  return (
    <div className={styles.imageWrapper}>
      <img src={image} alt="Listing" className={styles.image} />
      <button className={styles.closeBtn}>
        <X size={16} />
      </button>
    </div>
  );
}
