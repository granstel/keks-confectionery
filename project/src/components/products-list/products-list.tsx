import ProductCard from "../product/product-card";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";

export default function ProductsList():JSX.Element {
  return (
    <ul className="random-main__list">
      <li className="random-main__item">
        <ProductCard />
      </li>
      <li className="random-main__item">
        <ProductCard />
      </li>
      <li className="random-main__item">
        <ProductCard />
      </li>
      <li className="random-main__item">
        <Link className="random-main__link" to={AppRoute.Catalog}>
          <div className="random-main__icon-wrapper">
            <div className="random-main__icon">
              <svg width="120" height="130" aria-hidden="true">
                <use xlinkHref="#icon-keks"></use>
              </svg>
            </div>
          </div>
          <h3 className="random-main__subtitle">Все кексы</h3>
        </Link>
      </li>
    </ul>
  );
}
