import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware, { END } from 'redux-saga'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import reducers from '../reducers'
import storage from 'redux-persist/es/storage'
import { persistStore, persistCombineReducers } from 'redux-persist'

const config = {
  key: 'root',
  storage,
  debug: true
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
      applyMiddleware(
        sagaMiddleware,
        createLogger(),
        routerMiddleware(history)
      )
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }
  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  
  const persistor = persistStore(store)
  return { persistor, store }
}