import React from 'react'

//Styles
import styles from "./ItemDisplay.module.css"


function ItemDisplay({listing}) {
  return (
    <div className={styles.content}>
        <div className={styles.container}>
            <div className={styles.mainImage}>
                <img src={listing.item.imagePath} alt={`A image of ${listing.item.title}`} />
            </div>
            <div className={styles.gallery}>
                <img src={listing.item.imagePath} alt={`A image of ${listing.imageDescription}`} />
                <img src={listing.item.imagePath} alt={`A image of ${listing.imageDescription}`} />
                <img src={listing.item.imagePath} alt={`A image of ${listing.imageDescription}`} />
                <img src={listing.item.imagePath} alt={`A image of ${listing.imageDescription}`} />
                <img src={listing.item.imagePath} alt={`A image of ${listing.imageDescription}`} />
            </div>
            <div className={styles.description}>
                <h3>Details</h3>
                <p>{`Condition: ${listing.item.condition}`}</p>
                <h3>Full Description</h3>
                <p>{listing.item.itemDescription}</p>
            </div>
        </div>
    </div>
  )
}

export default ItemDisplay;