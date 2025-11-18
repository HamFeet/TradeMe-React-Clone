import React from 'react'
import ListingDescriptionStack from "../../common/ListingDescriptionStack/ListingDescriptionStack.jsx";
import QuestionAndAnswer from "../../assets/Listing/QuestionAndAnswer/QuestionAndAnswer.jsx";
import AboutTheSeller from "../../assets/Listing/AboutTheSeller/AboutTheSeller.jsx";

import styles from "./Listing.module.css"

function Listing(item) {
  return (
    <div className={styles.container}>
      <ListingDescriptionStack listing={item} />
      <QuestionAndAnswer/>
      <AboutTheSeller/>
    </div>
  )
}

export default Listing;