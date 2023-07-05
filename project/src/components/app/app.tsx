import Main from '../../pages/main/main';
import {Route, Routes} from "react-router-dom";
import {AppRoute} from "../../const";
import Product from "../../pages/Product/Product";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<Main />}/>
      <Route path={AppRoute.Product} element={<Product />}/>
    </Routes>
  );

}

export default App;
