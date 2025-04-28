import { HelmetProvider } from 'react-helmet-async';
import MainScreen from '../../pages/main-screen/main-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history-api';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import CartScreen from '../../pages/cart-screen/cart-screen';
import GoodScreen from '../../pages/good-screen/good-screen';

function App(): JSX.Element {

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <MainScreen/>
            }
          />
          <Route
            path={'/order'}
            element={
              <CartScreen/>
            }
          />
          <Route
            path={'/good/:title'}
            element={
              <GoodScreen/>
            }
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
