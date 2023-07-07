import BackLink from '../../components/back-link/back-link';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import ProductsList from '../../components/products-list/products-list';

export default function Catalog(): JSX.Element {
  return (
    <>
      <Header />
      <BackLink />
      <main>
        <div className="catalog-filter">
          <div className="container">
            <div className="catalog-filter__first-level">
              <h3 className="catalog-filter__title catalog-filter__title--first-level">основы</h3>
              <ul className="catalog-filter__list catalog-filter__list--first-level">
                <li className="catalog-filter__item catalog-filter__item--first-level">
                  <button className="btn btn--filter-first-level" type="button">Бисквит</button>
                </li>
                <li className="catalog-filter__item catalog-filter__item--first-level">
                  <button className="btn btn--filter-first-level" type="button">Десерт</button>
                </li>
                <li className="catalog-filter__item catalog-filter__item--first-level">
                  <button className="btn btn--filter-first-level" type="button">Чизкейк</button>
                </li>
                <li className="catalog-filter__item catalog-filter__item--first-level">
                  <button className="btn btn--filter-first-level" type="button">Песочное</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="catalog">
          <div className="container">
            <h2 className="visually-hidden">Каталог</h2>
            <div className="catalog__wrapper">
              <ProductsList classNamePrefix={'catalog'} showMore bigCards />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
