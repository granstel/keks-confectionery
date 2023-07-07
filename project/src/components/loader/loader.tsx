type loaderProps = {
  isShowLoader?: boolean;
}

export default function Loader({ children, isShowLoader = false }: React.PropsWithChildren<loaderProps>): JSX.Element {

  return (
    <>
      {isShowLoader &&
        <div className="container" style={{ justifyContent: 'center', display: 'inline-flex' }}>
          <div className="loader"></div>
        </div>}
      {!!isShowLoader && children}
    </>
  );
}
