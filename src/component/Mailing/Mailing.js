import React from "react";
import "./Mailing.css";

function Mailing({ handlePopupOpened }) {
  return (
    <section className="mailing">
      <div className="mailing__container">
        <h2 className="mailing__title">Что будет включать в себя рассылка?</h2>
        <div className="mailing__card-wrapper">
          <div className="mailing__card">
            <h3 className="mailing__card-title">Бери и делай</h3>
            <p className="mailing__card-disriprion">
              Гайды с примерами <br /> решенных кейсов студий <br /> по теме
              выпуска
            </p>
          </div>
          <div className="mailing__card">
            <h3 className="mailing__card-title">Анонсы</h3>
            <p className="mailing__card-disriprion">
              Афиши отраслевых <br /> вебинаров, встреч, <br /> конференций
            </p>
          </div>
          <div className="mailing__card">
            <h3 className="mailing__card-title">Будь в курсе</h3>
            <p className="mailing__card-disriprion">
              Новости отрасли, <br /> которые важно не <br /> пропустить
            </p>
          </div>
          <div className="mailing__card">
            <h3 className="mailing__card-title">Опыт</h3>
            <p className="mailing__card-disriprion">
              Экспертное интервью <br /> или колонка
            </p>
          </div>
          <div className="mailing__card">
            <h3 className="mailing__card-title">Вдохновение или фейл</h3>
            <p className="mailing__card-disriprion">
              Поучительная история успеха или <br /> предпринимательской ошибки
            </p>
          </div>
        </div>
        <button
          className="mailing__button"
          onClick={handlePopupOpened}
          type="button"
        >
          Подписаться на рассылку
        </button>
        <div className="mailing__letter" />
        <div className="mailing__chat" />
      </div>
    </section>
  );
}

export default Mailing;
