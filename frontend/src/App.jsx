import { Route, Routes } from 'react-router-dom'
import "./App.css";
import "./styles/base.css";

//Pages
import Landing from './pages/Landing/Landing.jsx';
import Listing from './pages/Listing/Listing.jsx';
import CompareListings from './pages/CompareListings/CompareListings.jsx';

//Components
import Header from "./common/Header/Header.jsx";
import Footer from "./common/Footer/Footer.jsx";

//Data
import { dummyItems } from './common/data/dummyItems.js'

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/listing' element={<Listing item={dummyItems[0]} />} />
        <Route path='/compare' element={<CompareListings />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
