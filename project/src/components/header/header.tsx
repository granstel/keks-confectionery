import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

export default function Header():JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link className="header__logo" to={AppRoute.Main} aria-label="Переход на главную">
            <img src="/img/svg/logo.svg" width="170" height="69" alt="Кондитерская кекс" />
          </Link>
          <div className="header__buttons">
            <div className="header__btn">
              <Link className="btn btn--third header__link header__link--reg" to={AppRoute.Register}>
                Регистрация
              </Link>
            </div>
            <div className="header__btn">
              <Link className="btn" to={AppRoute.Login}>
                Войти
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
