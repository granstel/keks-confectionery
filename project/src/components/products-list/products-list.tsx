import ProductCard from '../product/product-card';

type productsListProps = {
  classNamePrefix: string,
  children: JSX.Element | undefined;
}

export default function ProductsList(props: productsListProps):JSX.Element {
  const {classNamePrefix, children} = props;
  return (
    <ul className={`${classNamePrefix}__list`}>
      <li className={`${classNamePrefix}__item`}>
        <ProductCard />
      </li>
      <li className={`${classNamePrefix}__item`}>
        <ProductCard />
      </li>
      <li className={`${classNamePrefix}__item`}>
        <ProductCard />
      </li>
      {children ?? ''}
    </ul>
  );
}
