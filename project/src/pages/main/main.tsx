import Header from '../../components/header/header';
import ProductCard from '../../components/product/product-card';
import Review from '../../components/review/review';
import Footer from '../../components/footer/footer';

export default function Main(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <div className="hero">
          <div className="container">
            <div className="hero__img-wrapper">
              <img className="hero__img" src="img/svg/hero-keks.svg" width="727" height="569" alt="Картика кота." />
            </div>
            <div className="hero__wrapper">
              <p className="hero__subtitle">Твоя пушистая кондитерская</p>
              <p className="hero__title">КЕКС</p>
              <div className="hero__button-wrapper">
                <a className="btn" href="catalog-page.html">Скорее смотреть</a>
              </div>
            </div>
          </div>
        </div>
        <section className="random-main">
          <div className="container">
            <h2 className="random-main__title">кексы</h2>
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
                <a className="random-main__link" href="/keksses">
                  <div className="random-main__icon-wrapper">
                    <div className="random-main__icon">
                      <svg width="120" height="130" aria-hidden="true">
                        <use xlinkHref="#icon-keks"></use>
                      </svg>
                    </div>
                  </div>
                  <h3 className="random-main__subtitle">Все кексы</h3>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="last-review">
          <div className="container">
            <h2 className="last-review__title">последний отзыв</h2>
            <Review />
          </div>
        </section>
        <section className="map">
          <div className="container">
            <h2 className="map__title">адреса</h2>
            <div className="map__wrapper"></div>
            <ul className="map__addresses">
              <li className="map__address">
                <div className="custom-toggle custom-toggle--radio custom-toggle--address">
                  <input type="radio" value="user-agreement-10" id="user-agreement-id-10" name="user-agreement" />
                  <label className="custom-toggle__label" htmlFor="user-agreement-id-10">Кондитерская 1</label>
                  <address className="custom-toggle__address">Морской пр. 2А
                    <svg className="custom-toggle__icon" width="26" height="24" aria-hidden="true">
                      <use xlinkHref="#icon-keks-footprint"></use>
                    </svg>
                  </address>
                </div>
              </li>
              <li className="map__address">
                <div className="custom-toggle custom-toggle--radio custom-toggle--address">
                  <input type="radio" value="user-agreement-12" id="user-agreement-id-12" name="user-agreement" checked />
                  <label className="custom-toggle__label" htmlFor="user-agreement-id-12">Кондитерская 2</label>
                  <address className="custom-toggle__address">Морской пр. 2А
                    <svg className="custom-toggle__icon" width="26" height="24" aria-hidden="true">
                      <use xlinkHref="#icon-keks-footprint"></use>
                    </svg>
                  </address>
                </div>
              </li>
              <li className="map__address">
                <div className="custom-toggle custom-toggle--radio custom-toggle--address">
                  <input type="radio" value="user-agreement-13" id="user-agreement-id-13" name="user-agreement" />
                  <label className="custom-toggle__label" htmlFor="user-agreement-id-13">Производство</label>
                  <address className="custom-toggle__address">Морской пр. 2А
                    <svg className="custom-toggle__icon" width="26" height="24" aria-hidden="true">
                      <use xlinkHref="#icon-keks-footprint"></use>
                    </svg>
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
