import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from './MainScreen'
import Detail from './DetailScreen'

const Drawer = createDrawerNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home' screenOptions={{gestureEnabled: true}}>
        <Drawer.Screen name='Home' component={Home}/>
        <Drawer.Screen name='Detail' component={Detail}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator

