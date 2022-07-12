import "./OurProducts.css";
import MobileAppIcon from "../../images/mobile_app.png";
import AccountIcon from "../../images/account.png";
import OnlinePayIcon from "../../images/online_pay.png";

function OurProducts() {
  return (
    <section className="our-products">
      <div className="our-products__container">
        <div className="our-products__text-wrapper">
          <h2 className="our-products__title">
            Наши продукты объединяют 4 нужные функции в одной системе
          </h2>
          <p className="our-products__discription">
            Полностью интегрируются друг с другом и позволяют автоматизировать
            бизнес-процессы на 360 градусов.
          </p>
        </div>
        <div className="our-products__links-wrapper">
          <a className="our-products__link our-products__mobile" href="#">
            <img src={MobileAppIcon} alt="mobile app" className="our-products__link-image"/>
            <p className="our-products__link-text">Мобильное приложение</p>
          </a>
          <a className="our-products__link our-products__account" href="#">
            <img src={AccountIcon} alt="account page" className="our-products__link-image"/>
            <p className="our-products__link-text">Учетная система</p>
          </a>
          <a className="our-products__link our-products__online-register" href="#">
            <img src={AccountIcon} alt="online-register page" className="our-products__link-image"/>
            <p className="our-products__link-text">
              Онлайн-запись для сайта и социальных сетей
            </p>
          </a>
          <a className="our-products__link our-products__online-pay" href="#">
            <img src={OnlinePayIcon} alt="online-pay page" className="our-products__link-image"/>
            <p className="our-products__link-text">Онлайн-оплата</p>
          </a>
        </div>
        <div className="our-products__circle" />
        <div className="our-products__heart" />
        <div className="our-products__rupor" />
      </div>
    </section>
  );
}

export default OurProducts;
