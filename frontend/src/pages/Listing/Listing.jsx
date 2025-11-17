import React from 'react'
import ListingDescriptionStack from "../../common/ListingDescriptionStack/ListingDescriptionStack.jsx";
import QuestionAndAnswer from "../../assets/Listing/QuestionAndAnswer/QuestionAndAnswer.jsx";
import AboutTheSeller from "../../assets/Listing/AboutTheSeller/AboutTheSeller.jsx";


function Listing(item) {
  return (
    <div>
      <ListingDescriptionStack listing={item}/>
      <QuestionAndAnswer/>
      <AboutTheSeller/>
    </div>
  )
}

export default Listing;