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

  let slicedProducts = products.slice(0, oneScreenCount);
  let showedProductsScreens = 1;
  let isAllProductsShowed = false;
  
  function showMoreOnClick(): void
  {
    showedProductsScreens++;
    slicedProducts = products.slice(0, oneScreenCount * showedProductsScreens);
    isAllProductsShowed = slicedProducts.length == products.length;
  }

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
        <div className="catalog__button-wrapper" onClick={showMoreOnClick}>
          <button className="btn btn--second" type="button">{isAllProductsShowed ? 'В начало' : 'Показать еще'}</button>
          </div>}
    </Loader>
  );
}
