import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}
const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
  let store = createStore(
    persistedReducer,
    applyMiddleware(ReduxThunk)
  )
  let persistor = persistStore(store)
  return {store, persistor}
}