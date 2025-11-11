import Header from "./common/Header/Header.jsx";
import "./App.css";
import AuctionCarousel from "./common/Carousel/AuctionCarousel.jsx";
import Footer from "./common/Footer/Footer.jsx";
import "./styles/base.css";

function App() {
  return (
    <>
      <Header></Header>
      <div style={{ padding: 16 }}>
        <AuctionCarousel title="Cool auctions" useDummy />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
