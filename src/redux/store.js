import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleWare from 'redux-saga';
import reducers from './reducers/index';
import state from './state';
import sagas from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(
  reducers,
  state,
  compose(applyMiddleware(sagaMiddleWare), composeWithDevTools())
)

sagaMiddleWare.run(sagas);

export default store;