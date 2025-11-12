import "./App.css";
import "./styles/base.css";

//Components
import Header from "./common/Header/Header.jsx";
import AuctionCarousel from "./common/Carousel/AuctionCarousel.jsx";
import Footer from "./common/Footer/Footer.jsx";
import ListingDescriptionStack from "./common/ListingDescriptionStack/ListingDescriptionStack.jsx";
import QuestionAndAnswer from './assets/Listing/QuestionAndAnswer/QuestionAndAnswer.jsx'

//Data
import { dummyItems } from './common/data/dummyItems.js'

function App() {
  return (
    <>
      <Header/>
      {/* <ListingDescriptionStack item={dummyItems[0]}/> */}
      <QuestionAndAnswer/> 
      {/* <div style={{ padding: 16 }}>
        <AuctionCarousel title="Cool auctions" useDummy />
      </div> */}
      <Footer/>
    </>
  );
}

export default App;
