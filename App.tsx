/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/pages/Login/Login';
import Home from './src/pages/Home/Home';
import BookRoom from './src/pages/BookRoom/BookRoom';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  BookRoom: undefined;
};

const App = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BookRoom" component={BookRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
