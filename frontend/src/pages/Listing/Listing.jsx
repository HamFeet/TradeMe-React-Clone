import ListingDescriptionStack from "../../common/ListingDescriptionStack/ListingDescriptionStack.jsx";
import ItemDisplay from "../../assets/Listing/ItemDisplay/ItemDisplay.jsx";
import QuestionAndAnswer from "../../assets/Listing/QuestionAndAnswer/QuestionAndAnswer.jsx";
import AboutTheSeller from "../../assets/Listing/AboutTheSeller/AboutTheSeller.jsx";

import styles from "./Listing.module.css";

function Listing({ item }) {
  return (
    <div className={styles.container}>

      <div className={styles.leftColumn}>
        <ItemDisplay item={item} />
        <QuestionAndAnswer />
        <AboutTheSeller />
      </div>

      <div className={styles.rightColumn}>
        {/* This should contain the watchlist button + bidding box */}
        <ListingDescriptionStack item={item} sidebar />
      </div>

    </div>
  );
}

export default Listing;
