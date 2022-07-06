import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import BuisnessProblem from "../BuisnessProblem/BuisnessProblem";
import PhotoSlider from "../PhotoSlider/PhotoSlider";

function App() {
  return (
    <div className="page">
      <Header />
      <Promo />
      <BuisnessProblem />
      <PhotoSlider />
    </div>
  );
}

export default App;
