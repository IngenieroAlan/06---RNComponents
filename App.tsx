import 'react-native-gesture-handler';//Siempre tiene que estar primero
import React from 'react'
import { Navigator } from './src/navigator/Navigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  )
}

export default App;