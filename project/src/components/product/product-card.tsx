import {generatePath, Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import { Product } from '../../types/product';

type ProductCardProps = {
  bigCard?: boolean;
  product: Product;
}

export default function ProductCard(props: ProductCardProps): JSX.Element {
  const { bigCard, product } = props;
  return (
    <div className={`card-item ${bigCard === true ? 'card-item--big' : ''}`}>
      <Link className="card-item__img-link" to={generatePath(AppRoute.Product, { id: product.id })}>
        <div className="card-item__img-wrapper">
          <picture>
            <source type="image/webp" srcSet={product.previewImageWebp} />
            <img src={product.previewImage} width="241" height="245" alt={product.title} />
          </picture>
        </div>
        {product.isNew && <span className="card-item__label">Новинка</span>}
      </Link>
      <button className={`card-item__favorites ${product.isFavorite ? 'card-item__favorites--active' : ''}`}>
        <span className="visually-hidden">Добавить в избранное</span>
        <svg width="51" height="41" aria-hidden="true">
          <use xlinkHref="#icon-like"></use>
        </svg>
      </button>
      {bigCard && <span className="card-item__price">{product.price} p</span>}
      <Link className="card-item__link" to={generatePath(AppRoute.Product, { id: product.id })}>
        <h3 className="card-item__title">
          <span>{product.title}</span>
        </h3>
      </Link>
    </div>
  );
}
