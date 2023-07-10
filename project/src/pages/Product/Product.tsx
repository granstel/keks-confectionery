import ReviewForm from '../../components/review-form/review-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import BackLink from '../../components/back-link/back-link';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { store } from '../../store';
import { loadProduct } from '../../store/api-actions';
import { useAppSelector } from '../../hooks';
import { Settings } from '../../const';

export default function Product(): JSX.Element {
  const { id } = useParams();

  const [isShowFullDescription, setIsShowFullDescription] = useState<boolean>(false);

  const isProductLoading = useAppSelector((state) => state.isProductLoading);
  const product = useAppSelector((state) => state.product);

  useEffect(() => {
    if (isProductLoading) {
      return;
    }

    if (!product && id) {
      store.dispatch(loadProduct(id));
    }
  }, [isProductLoading, id, product]);

  function showStars(rating: number | undefined): JSX.Element[] {
    const result: JSX.Element[] = [];

    if (!rating) {
      return result;
    }

    for (let i = 0; i < rating; i++) {
      result.push(
        <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true" key={i}>
          <use xlinkHref="#icon-star"></use>
        </svg>
      );
    }
    return result;
  }

  function showDescription(description: string | undefined): string {
    if (!description) {
      return '';
    }

    if (isShowFullDescription) {
      return description;
    }

    return description.slice(0, Settings.SplitDescriptionOver);
  }

  function moreButtonClickHandler(): void {
    setIsShowFullDescription(true);
  }

  return (
    <>
      <Header />
      <BackLink />
      <section className="item-details item-details--form-open">
        <div className="container">
          <div className="item-details__wrapper">
            <div className="item-details__top-wrapper">
              <h2 className="item-details__name">{product?.title}</h2>
              <span className="item-details__price">{product?.price} р</span>
            </div>
            <div className="item-details__weight-wrapper">
              <span className="item-details__weight">{product?.weight} грамм</span>
            </div>
            <div className="item-details__bottom-wrapper">
              <div className="item-details__image-wrapper">
                <picture>
                  <source type="image/webp" srcSet={product?.previewImageWebp} />
                  <img src={product?.previewImage} width="241" height="245" alt={product?.title} />
                </picture>
                {product?.isNew && <span className="item-details__label">Новинка</span>}
              </div>
              <div className="item-details__review-wrapper">
                <div className="star-rating star-rating--big">
                  {showStars(product?.rating)}
                  <span className="star-rating__count">{product?.reviewCount}</span>
                </div>
                <div className="item-details__text-wrapper">
                  <span className="item-details__text">{showDescription(product?.description)}</span>
                  {
                    (product?.description?.length ?? 0) > Settings.SplitDescriptionOver && !isShowFullDescription &&
                    <button className="item-details__more" onClick={moreButtonClickHandler}>
                      <span className="visually-hidden">Читать полностью</span>
                      <svg width="27" height="17" aria-hidden="true">
                        <use xlinkHref="#icon-more"></use>
                      </svg>
                    </button>
                  }
                </div>
                <div className="item-details__button-wrapper">
                  <button className="item-details__like-button">
                    <svg width="45" height="37" aria-hidden="true">
                      <use xlinkHref="#icon-like"></use>
                    </svg>
                    <span className="visually-hidden">Понравилось</span>
                  </button>
                  <button className="btn btn--second" type="button">Оставить отзыв</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ReviewForm />
      <ReviewsList />
      <Footer />
    </>
  );
}
