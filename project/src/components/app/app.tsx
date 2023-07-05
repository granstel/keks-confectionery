import Main from '../../pages/main/main';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import Product from '../../pages/Product/Product';
import Register from '../../pages/register/register';
import Login from '../../pages/login/login';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<Main />}/>
      <Route path={AppRoute.Product} element={<Product />} />
      <Route path={AppRoute.Register} element={<Register />} />
      <Route path={AppRoute.Login} element={<Login />} />
    </Routes>
  );

}

export default App;
