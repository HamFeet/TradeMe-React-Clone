import React from 'react'

//Styles
import styles from "./ItemDisplay.module.css"


function ItemDisplay({ item }) {
  return (
    <div className={styles.content}>
        <div className={styles.container}>
            <div className={styles.mainImage}>
                <img src={item.imagePath} alt={`A image of ${item.title}`} />
            </div>
            <div className={styles.gallery}>
                <img src={item.imagePath} alt={`A image of ${item.imageDescription}`} />
                <img src={item.imagePath} alt={`A image of ${item.imageDescription}`} />
                <img src={item.imagePath} alt={`A image of ${item.imageDescription}`} />
                <img src={item.imagePath} alt={`A image of ${item.imageDescription}`} />
                <img src={item.imagePath} alt={`A image of ${item.imageDescription}`} />
            </div>
            <div className={styles.description}>
                <h3>Details</h3>
                <p>{`Condition: ${item.condition}`}</p>
                <h3>Full Description</h3>
                <p>{item.description}</p>
            </div>
        </div>
    </div>
  )
}

export default ItemDisplay;