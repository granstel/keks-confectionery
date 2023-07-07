import React from 'react';
import {generatePath, Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type ProductCardProps = {
  bigCards?: boolean;
}

export default function ProductCard(props: ProductCardProps): JSX.Element {
  const { bigCards } = props;
  return (
    <div className={`card-item ${bigCards === true ? 'card-item--big' : ''}`}>
      <Link className="card-item__img-link" to={generatePath(AppRoute.Product, {id : '1'})}>
        <div className="card-item__img-wrapper">
          <picture>
            <source type="image/webp" srcSet="/img/content/blueberry-cake.webp, /img/content/blueberry-cake@2x.webp 2x" />
            <img src="/img/content/blueberry-cake.jpg" srcSet="/img/content/blueberry-cake@2x.jpg 2x" width="241" height="245" alt="Торт голубика." />
          </picture>
        </div><span className="card-item__label">Новинка</span>
      </Link>
      <button className="card-item__favorites card-item__favorites--active"><span className="visually-hidden">Добавить в избранное</span>
        <svg width="51" height="41" aria-hidden="true">
          <use xlinkHref="#icon-like"></use>
        </svg>
      </button>
      {bigCards && <span className="card-item__price">9 300 p</span>}
      <a className="card-item__link" href="/1">
        <h3 className="card-item__title"><span>Торт Голубика</span></h3>
      </a>
    </div>
  );
}
