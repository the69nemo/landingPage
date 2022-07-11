import "./App.css";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import BuisnessProblem from "../BuisnessProblem/BuisnessProblem";
import PhotoSlider from "../PhotoSlider/PhotoSlider";
import AboutUs from "../AboutUs/AboutUs";
import WhatIsIt from "../WhatIsIt/WhatIsIt";
import Mailing from "../Mailing/Mailing";
import WhoIsIt from "../WhoIsIt/WhoIsIt";
import OurProducts from "../OurProducts/OurProducts";

function App() {
  return (
    <div className="page">
      <Header />
      <Promo />
      <BuisnessProblem />
      <PhotoSlider />
      <AboutUs />
      <WhatIsIt />
      <Mailing />
      <WhoIsIt />
      <OurProducts />
    </div>
  );
}

export default App;
