import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import storeConfig from './app/global/store'

import Home from './app/screens/home'

const { store, persistor } = storeConfig()

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="dark-content" />
        <Home />
      </PersistGate>
    </Provider>
  )
}

export default App
