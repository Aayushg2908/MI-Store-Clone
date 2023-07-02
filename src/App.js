import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import pkg from "./data/data.json";
import Offers from "./components/Offers";
import Header from "./components/Heading.js";
import StarProduct from "./components/StarProduct.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import HotAccessories from "./components/HotAccessories.js";
import ProductReviews from "./components/ProductReviews.js";
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavOptions from "./components/NavOptions.js"

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions miPhones={pkg.miPhones} redmiPhones={pkg.redmiPhones} tv={pkg.tv} laptop={pkg.laptop} fitnessAndLifeStyle={pkg.fitnessAndLifeStyle} home={pkg.home} audio={pkg.audio}  accessories={pkg.accessories}/>
      <Slider start={pkg.banner.start} />
      <Offers offers={pkg.offer} />
      <Header text="STAR PRODUCTS" />
      <StarProduct StarProduct={pkg.starProduct} />
      <Header text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              music={pkg.hotAccessories.music}
              musicCover={pkg.hotAccessoriesCover.music}
            />
          }
        />
        <Route
          exact
          path="/smartDevice"
          element={
            <HotAccessories
              smartDevice={pkg.hotAccessories.smartDevice}
              smartDeviceCover={pkg.hotAccessoriesCover.smartDevice}
            />
          }
        />
        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              home={pkg.hotAccessories.home}
              homeCover={pkg.hotAccessoriesCover.home}
            />
          }
        />
        <Route
          exact
          path="/lifestyle"
          element={
            <HotAccessories
              lifeStyle={pkg.hotAccessories.lifeStyle}
              lifeStyleCover={pkg.hotAccessoriesCover.lifeStyle}
            />
          }
        />
        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={pkg.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={pkg.hotAccessoriesCover.mobileAccessories}
            />
          }
        />
      </Routes>
      <Header text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={pkg.productReviews} />
      <Header text="VIDEOS" />
      <Videos videos={pkg.videos} />
      <Header  text="IN THE PRESS"/>
      <Banner banner={pkg.banner} />
      <Footer footer={pkg.footer} />
    </Router>
  );
}

export default App;
