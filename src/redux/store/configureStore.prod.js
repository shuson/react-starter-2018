import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import reducers from '../reducers'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'

const config = {
  key: 'root',
  storage
}

const reducer = persistCombineReducers(config, {
  ...reducers
})

export default function configureStore(initialState, history) {
  const sagaMiddleware = createSagaMiddleware()
  
  const store = createStore(
    connectRouter(history)(reducer),
    initialState,
    compose(
      applyMiddleware(sagaMiddleware, routerMiddleware(history))
    )
  )

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)

  const persistor = persistStore(store)
  return { persistor, store }
}