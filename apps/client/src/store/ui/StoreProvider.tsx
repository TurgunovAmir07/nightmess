import { Provider } from 'react-redux'
import { setupStore } from '../index'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import React from 'react'

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const ReduxStore = setupStore()
  const persistor = persistStore(ReduxStore)
  return (
    <Provider store={ReduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default StoreProvider
