import React from 'react'
import styles from './AboutTheSeller.module.css'


function AboutTheSeller({ seller }) {
  return (
    <div className={styles.content}>
        <div className={styles.title}>
            <h3>About the seller</h3>
        </div>
        <div className={styles.sellerContainer}>
            <div className={styles.sellerProfile}>
                <img src={seller.photo} alt="Seller" />
                <h3>{seller.name}</h3>
                <p>{`${seller.rating} / 5 ⭐`}</p>
            </div>
            <div className={styles.sellerLocation}>
                <p>Location</p>
                <p>{seller.location}</p>
            </div>
            <div className={styles.sellerJoining}>
                <p>Member since</p>
                <p>{seller.joiningDate}</p>
            </div>
            <button>View seller's other listings</button>
        </div>
        <div className={styles.closingButtons}>        
            <button className={styles.favouritesButton}>Add to Faviourite Sellers</button>
            <button className={styles.adviceButton}>Read our safe buying advice</button>
        </div>

    </div>
  )
}

export default AboutTheSeller