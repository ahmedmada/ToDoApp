/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import MainScreen from './src/screens/MainScreen'
import Naviagtion from './src/navigation/';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';

const App = () => {

  return (
    <Provider store={store()}>
      {/* <MainScreen /> */}
      <Naviagtion />
    </Provider>
  )
}

export default App