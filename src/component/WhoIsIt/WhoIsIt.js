import React from 'react';
import "./WhoIsIt.css";

function WhoIsIt() {
  return (
    <section className="who-is-it">
      <div className="who-is-it__container">
        <h2 className="who-is-it__title">Кто такие Mobifitness?</h2>
        <p className="who-is-it__discripton">
          Mobifitness — технологический лидер разработки решений для
          автоматизации спортивных студий и клубов.
        </p>
        <div className="who-is-it__stat-wrapper">
          <h3 className="who-is-it__stat-title">Мы автоматизировали более:</h3>
          <ul className="who-is-it__stat-cards">
            <li className="who-is-it__stat-card">
              <h4 className="who-is-it__stat-card-tite">2000</h4>
              <p className="who-is-it__stat-card-discription">студий и клубов</p>
            </li>
            <li className="who-is-it__stat-card">
              <h4 className="who-is-it__stat-card-tite">200</h4>
              <p className="who-is-it__stat-card-discription">городах</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhoIsIt;
