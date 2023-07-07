import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { loadProducts } from '../../store/api-actions';
import Loader from '../loader/loader';
import ProductCard from '../product/product-card';

type productsListProps = {
  classNamePrefix: string;
  showMore?: boolean;
  bigCards?: boolean;
}

store.dispatch(loadProducts());

export default function ProductsList(props: React.PropsWithChildren<productsListProps>):JSX.Element {
  const { classNamePrefix, children, bigCards, showMore = false } = props;

  const isProductsLoading = useAppSelector((state) => state.isProductsLoading);

  return (
    <Loader isShow={ isProductsLoading }>
      <ul className={`${classNamePrefix}__list`}>
        <li className={`${classNamePrefix}__item`}>
          <ProductCard bigCards={bigCards} />
        </li>
        <li className={`${classNamePrefix}__item`}>
          <ProductCard bigCards={bigCards} />
        </li>
        <li className={`${classNamePrefix}__item`}>
          <ProductCard bigCards={bigCards} />
        </li>
        {children}
      </ul>
      {showMore &&
          <div className="catalog__button-wrapper">
            <button className="btn btn--second" type="button">Показать еще</button>
          </div>}
    </Loader>
  );
}
