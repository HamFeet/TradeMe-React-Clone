import styles from './ListingDescriptionStack.module.css'


function ListingDescriptionStack({ item }) {
  return (
    <div className={styles.content}>
      <h1>{item.title}</h1>
      <button className={styles.button}>Add To Watchlist</button>
      <p>5 others watching</p>
      <p>Starting Price</p>
      <h1>${item.start_price}</h1>
      <button className={styles.button}>Place bid</button>
      <button className={styles.button}>Buy Now</button>
      <button className={styles.button}>Make offer</button>
      <p>No reserve</p>
      <p>No bids</p>
      <h5>Product at a glance</h5>
      <button className={styles.button}>About product</button>
      <button className={styles.button}>Instructions and maintenance</button>
      <button className={styles.button}>Warranty</button>
      <button className={styles.button}>Delivery</button>
    </div>
  )
}

export default ListingDescriptionStack