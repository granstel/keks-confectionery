type loaderProps = {
  isShow?: boolean;
}

export default function Loader({ children, isShow = false }: React.PropsWithChildren<loaderProps>): JSX.Element {

  if (isShow) {
    return (
      <>
        {!!isShow &&
          <div className="container" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <div className="loader"></div>
          </div>}
        {isShow && children}
      </>
    );
  }
}
