import ListingDescriptionStack from "../../common/ListingDescriptionStack/ListingDescriptionStack.jsx";
import ItemDisplay from "../../assets/Listing/ItemDisplay/ItemDisplay.jsx";
import QuestionAndAnswer from "../../assets/Listing/QuestionAndAnswer/QuestionAndAnswer.jsx";
import AboutTheSeller from "../../assets/Listing/AboutTheSeller/AboutTheSeller.jsx";

import styles from "./Listing.module.css";

//Context
import { useSelectedItem } from "../../context/SelectedItemContext";

function Listing() {
  const { selectedItem } = useSelectedItem();

  if (!selectedItem) {
    return <p>No item selected</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <ItemDisplay item={selectedItem} />
        <QuestionAndAnswer />
        <AboutTheSeller seller={selectedItem.seller}/>
      </div>

      <div className={styles.rightColumn}>
        <ListingDescriptionStack item={selectedItem} sidebar />
      </div>
    </div>
  );
}

export default Listing;