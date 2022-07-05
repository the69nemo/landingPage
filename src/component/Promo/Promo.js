import React from "react";
import "./Promo.css";

function Promo() {
  return (
    <div className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Профессиональная рассылка для владельцев спортивных студий от
          Mobifitness
        </h1>
        <div className="promo__circle promo__circle_type_small" />
        <div className="promo__circle promo__circle_type_big" />
        <div className="promo__letter promo__letter_type_small" />
        <div className="promo__letter promo__letter_type_big" />
        <div className="promo__heart promo__heart_type_small" />
        <div className="promo__heart promo__heart_type_big" />
        <div className="promo__like" />
        <div className="promo__text-wrapper">
          <p className="promo__scroll-text">
            Только практический опыт студийных проектов и важные новости рынка
            Только практический опыт студийных проектов и важные новости рынка
          </p>
        </div>
      </div>
    </div>
  );
}

export default Promo;
