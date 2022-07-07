import "./AboutUs.css";
import Earth from "../../images/earth.png";

function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-us__container">
        <div className="about-us__image-wrapper">
          <img className="about-us__image" src={Earth} alt="Earth" />
        </div>
        <div className="about-us__text-wrapper">
          <h2 className="about-us__title">
            Мы в Mobifitness работаем с несколькими тысячами спортивных студий в
            России и СНГ
          </h2>
          <div className="about-us__another-text-wrapper">
            <div className="about-us__line" />
            <p className="about-us__discription">
              Постарались сделать так, чтобы важный опыт рынка был у вас в
              доступе. Поэтому в нашей Академии Mobifitness появился новый
              проект — профессиональная рассылка.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
