import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './SplashScreen';
import Store from './StoreScreen';
import Parallax from './ParallaxScreen';

export default class Main extends React.Component {
  render(){
    const Stack = createStackNavigator();
    return (
     <Stack.Navigator headerMode="none">
      <Stack.Screen name="load" component={Splash}/>
      <Stack.Screen name="main" component={Store}/>
      <Stack.Screen name="parallax" component={Parallax}/>
    </Stack.Navigator>
    );
  }
}
