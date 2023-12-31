import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { scrollToTop } from '../../hooks/use-scroll-to-top';
import { store } from '../../store';
import { loadProducts } from '../../store/api-actions';
import { Products } from '../../types/product';
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

  const [slicedProductsState, setSlicedProducts] = useState<Products>([]);
  const [showedProductsScreens, setshowedProductsScreens] = useState<number>(1);
  const [isAllProductsShowed, setIsAllProductsShowed] = useState<boolean>(false);

  useEffect(() => {
    if (isProductsLoading) {
      return;
    }

    if (products) {
      const slicedProducts = products.slice(0, oneScreenCount * showedProductsScreens);

      setSlicedProducts(slicedProducts);
      setIsAllProductsShowed(slicedProducts.length === products.length);
    }
  }, [isProductsLoading, products, oneScreenCount, showedProductsScreens, isAllProductsShowed]);

  function catalogButtonOnClickHandler(): void
  {
    if (!isAllProductsShowed) {
      setshowedProductsScreens(showedProductsScreens + 1);
    }
    else {
      scrollToTop();
    }
  }

  return (
    <Loader isShowLoader={ isProductsLoading }>
      <ul className={`${classNamePrefix}__list`}>
        {slicedProductsState.map((p) =>
          (
            <li className={`${classNamePrefix}__item`} key={p.id}>
              <ProductCard bigCard={bigCards} product={p} />
            </li>))}
        {children}
      </ul>
      {showMore &&
        <div className="catalog__button-wrapper">
          <button className="btn btn--second" type="button" onClick={catalogButtonOnClickHandler}>{isAllProductsShowed ? 'В начало' : 'Показать еще'}</button>
        </div>}
    </Loader>
  );
}
