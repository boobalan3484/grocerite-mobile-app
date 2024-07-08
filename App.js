import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store';
import Navigation from './Screens/Navigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>

      <Navigation />

    </Provider>

  )
}

export default App