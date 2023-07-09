import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { loadProducts } from '../../store/api-actions';
import Loader from '../loader/loader';
import ProductCard from '../product/product-card';

type productsListProps = {
  classNamePrefix: string;
  showMore?: boolean;
  bigCards?: boolean;
  oneScreenCount: number;
}

store.dispatch(loadProducts());

export default function ProductsList(props: React.PropsWithChildren<productsListProps>):JSX.Element {
  const { classNamePrefix, children, bigCards, oneScreenCount, showMore = false } = props;

  const isProductsLoading = useAppSelector((state) => state.isProductsLoading);
  const products = useAppSelector((state) => state.products);

  const slicedProducts = products.slice(0, oneScreenCount);

  return (
    <Loader isShowLoader={ isProductsLoading }>
      <ul className={`${classNamePrefix}__list`}>
        {slicedProducts.map((p) =>
          (
            <li className={`${classNamePrefix}__item`} key={p.id}>
              <ProductCard bigCard={bigCards} product={p} />
            </li>))}
        {children}
      </ul>
      {showMore &&
          <div className="catalog__button-wrapper">
            <button className="btn btn--second" type="button">Показать еще</button>
          </div>}
    </Loader>
  );
}
