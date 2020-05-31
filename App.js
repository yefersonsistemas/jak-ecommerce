//Import React
import React from 'react';

//Import Navigators from React Navigation
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Import all the screens needed
import SplashScreen from './Screens/SplashScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import DrawerNavigationRoutes from './Screens/DrawerNavigationRoutes';

import Dispatcher from './NavigatorControl'

/*
npm install @react-navigation/native @react-navigation/stack @react-navigation/drawer --save
expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install --save styled-components
npm install --save react-native-safe-area-context@0.7.3
npm install --save react-native-reanimated
npm install
*/

export default function App() {
  return <Dispatcher />
}