import "./Header.css";
import Logo from '../../images/logo.svg';

function Header({ handlePopupOpened }) {
  return (
    <header className="header">
      <div className="header__container">
        <a className="header__link" href="#">
          <img className="header__logo" src={Logo} alt='логотип' />
        </a>
        <button className="header__button" type="button" onClick={handlePopupOpened}>
          Подписаться на рассылку
        </button>
      </div>
    </header>
  );
}

export default Header;
