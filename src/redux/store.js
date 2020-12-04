import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleWare from 'redux-saga';
import reducers from './reducers'
import state from './state'
import sagas from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
  reducers,
  state,
  compose(applyMiddleware(createSagaMiddleWare), composeWithDevTools())
)

createSagaMiddleWare.run(sagas);

export default store