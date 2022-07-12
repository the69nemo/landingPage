import React from "react";
import "./Popup.css";

function Popup() {
  return (
    <section className="popup">
      <div className="popup__container">
        <p className="popup__title">Заполните форму чтобы получать</p>
        <p className="popup__subtitle">Все последние новости</p>
        <button className="popup__close-button" type="button">
          X
        </button>
        <form className="popup__form">
          <label className="popup__label">
            <span className="popup__input-name">E-mail*</span>
            <input
              className="popup__input"
              name="email"
              placeholder="Укажите ваш E-mail"
            />
          </label>
          <button type="submit" className="popup__submit-button">
            Подписаться на рассылку
          </button>
          <div className="popup__form-agreement">
            <p className="popup__form-agreement-text">Нажимая кнопку, вы даете согласие на
              <a className="popup__form-agreement-link" target='_blank'>обработку персональных данных</a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Popup;
