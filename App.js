import React, { useEffect } from 'react'
import { ActivityIndicator, StatusBar, View } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import storeConfig from './app/global/store'

import Navigation from './app/navigation/bottom'

const { store, persistor } = storeConfig()

const App = () => {  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Navigation />
      </PersistGate>
    </Provider>
  )
}

export default App
