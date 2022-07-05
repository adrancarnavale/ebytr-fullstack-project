import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { MemoryHistory, createMemoryHistory } from 'history';
import { rootReducer } from '@app';
import { configureStore } from '@reduxjs/toolkit';
import { unstable_HistoryRouter as Router } from 'react-router-dom';

interface renderWithRouterAndReduxProps {
  initialState?: object;
  store?: Store;
  route?: string;
  history?: MemoryHistory;
}

export const renderWithRouterAndRedux = (
  component: React.ReactElement,
  {
    initialState = {},
    store = configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
    }),
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {} as renderWithRouterAndReduxProps
) => ({
  ...render(
    <Provider store={store}>
      <Router history={history}>{component}</Router>
    </Provider>
  ),
});
