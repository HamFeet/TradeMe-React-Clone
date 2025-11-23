import styles from './ListingDescriptionStack.module.css'

//React-Icons
import { LiaBinocularsSolid } from "react-icons/lia";



function ListingDescriptionStack({ item }) {
  return (
    <div className={styles.content}>
      <div className={styles.watchlistContainer}>
        <h1>{item.title}</h1>
        <button className={`${styles.button} ${styles.buttonWatchlist}`}><LiaBinocularsSolid/>Add To Watchlist</button>
        <p>5 others watching</p>
      </div>
      <div className={styles.biddingContainer}>
        <p>Starting Price</p>
        <h1>${item.startPrice}</h1>
        <button className={`${styles.button} ${styles.buttonPurchase}`}>Place bid</button>
        <button className={`${styles.button} ${styles.buttonPurchase}`}>Buy Now</button>
        <button className={`${styles.button} ${styles.buttonOffer}`}>Make offer</button>
        <p>No reserve</p>
        <p>No bids</p>
      </div>
      <div className={styles.productGlanceContainer}>
        <h5>Product at a glance</h5>
        <button className={`${styles.button} ${styles.buttonPill}`}>About product</button>
        <button className={`${styles.button} ${styles.buttonPill}`}>Instructions and maintenance</button>
        <button className={`${styles.button} ${styles.buttonPill}`}>Warranty</button>
        <button className={`${styles.button} ${styles.buttonPill}`}>Delivery</button>
      </div>
    </div>
  )
}

export default ListingDescriptionStack