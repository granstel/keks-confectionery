import ProductCard from '../product/product-card';

type productsListProps = {
  classNamePrefix: string,
}

export default function ProductsList(props: React.PropsWithChildren<productsListProps>):JSX.Element {
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
      {children}
    </ul>
  );
}
