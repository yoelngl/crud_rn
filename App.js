import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './routes'
import { Provider } from 'react-redux';
import {store} from './state/store.js';

const App = () => {
  return(
      <NavigationContainer>
        <Provider store={store}>
            <Routes />
        </Provider>
      </NavigationContainer>
  )
}

export default App
