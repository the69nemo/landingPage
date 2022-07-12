import React, { useState } from 'react';
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
import Popup from '../Popup/Popup';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handlePopupOpened = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="page">
      <Header
        handlePopupOpened={handlePopupOpened}
      />
      <Promo />
      <BuisnessProblem />
      <PhotoSlider />
      <AboutUs />
      <WhatIsIt />
      <Mailing />
      <WhoIsIt />
      <OurProducts />
      <Popup
        isOpen={isOpen}
        handlePopupOpened={handlePopupOpened}
      />
    </div>
  );
}

export default App;
