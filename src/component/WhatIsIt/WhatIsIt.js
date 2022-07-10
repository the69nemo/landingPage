import "./WhatIsIt.css";

function WhatIsIt() {
  return (
    <section className="what-is-it">
      <div className="what-is-it__container">
        <div className="what-is-it__text-wrapper">
          <h2 className="what-is-it__title">Что это такое?</h2>
          <p className="what-is-it__discription">
            Один раз в месяц мы отбираем ценный опыт предпринимателей студийного
            рынка по теме выпуска со всех площадок Академии Mobifitness:
            лайфхаки из эфиров, инсайты из профессионального Telegram-чата,
            советы из интервью. Упаковываем в удобные гайды и присылаем их вам.
          </p>
          <p className="what-is-it__discription">
            Каждый выпуск посвящен отдельному бизнес-процессу. Например:
            продажи, лояльность, найм тренеров и т.д.
          </p>
          <p className="what-is-it__discription">
            Все это мы дополняем информационным блоком: сводка новостей и
            анонсов, о которых полезно знать.
          </p>
          <p className="what-is-it__discription">
            Всю информацию вы будете получать в удобном дайджесте рассылки 1 раз
            в месяц.
          </p>
        </div>
        <div className="what-is-it__image-wrapper">
          <div className="what-is-it__circle" />
        </div>
        <p className="what-is-it__circle__text-on-circle what-is-it__circle__text-on-circle_type-1">
          Рассылка 1 раз в месяц
        </p>
        <p className="what-is-it__circle__text-on-circle what-is-it__circle__text-on-circle_type-2">
          По итогам вы получаете удобные гайды
        </p>
        <p className="what-is-it__circle__text-on-circle what-is-it__circle__text-on-circle_type-3">
          Каждый выпуск посвящен отдельному бизнес-процессу
        </p>
        <div className="what-is-it__bell" />
        <div className="what-is-it__chat" />
        <div className="what-is-it__like" />
        <div className="what-is-it__rupor" />
      </div>
    </section>
  );
}

export default WhatIsIt;
