<<<<<<< HEAD
import React from 'react';
import {StatusBar} from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';


import MainScreen from './MainScreen';
import DetailScreen from './DetailScreen';




/*****************************************/
/* INICIO DE DECLARACION DE MANEJADORES */
/***************************************/

const Drawer = createDrawerNavigator();




/*****************************************/
/* INICIO DE DECLARACION DE MANEJADORES */
/***************************************/
=======
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from './MainScreen'
import Detail from './DetailScreen'

const Drawer = createDrawerNavigator()
>>>>>>> 6b4495228d7df0d7a965b10880e2a1a3eaee5fe8

function MainStackNavigator() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <StatusBar hidden={false} backgroundColor={'white'} barStyle={'dark-content'}/>  
      <Drawer.Navigator initialRouteName='Home' drawerContentOptions={{activeTintColor: '#1aafffdd',
  }}>
        <Drawer.Screen 
            name='Home'
            component={MainScreen}
            options={({ navigation }) => ({
                title: 'Inicio',
                drawerIcon:()=>{return <Ionicons name="ios-home" size={28} color="rgb(30,45,60)"/>},
              })}
        />
        <Drawer.Screen 
            name='Category' 
            component={DetailScreen}
            options={({ navigation }) => ({
                title: 'Categorias',
                drawerIcon:()=>{return <Ionicons name="ios-list-box" size={26} color="rgb(30,45,60)"/>},
              })}
        />
        <Drawer.Screen 
            name='Favourite' 
            component={DetailScreen}
            options={({ navigation }) => ({
                title: 'Mis Favoritos',
                drawerIcon:()=>{return <Ionicons name="ios-heart" size={28} color="rgb(30,45,60)"/>},
              })}
        />
        <Drawer.Screen 
            name='Cart' 
            component={DetailScreen}
            options={({ navigation }) => ({
                title: 'Mi Carrito',
                drawerIcon:()=>{return <Ionicons name="ios-cart" size={28} color="rgb(30,45,60)"/>},
              })}
        />
        <Drawer.Screen 
            name='Order' 
            component={DetailScreen}
            options={({ navigation }) => ({
                title: 'Mi Carrito',
                drawerIcon:()=>{return <FontAwesome5 name="clipboard-list" size={27} color="rgb(30,45,60)"/>},
              })}
        />
        <Drawer.Screen 
            name='Address' 
            component={DetailScreen}
            options={({ navigation }) => ({
                title: 'Mi Direccion',
                drawerIcon:()=>{return <FontAwesome5 name="map-marker-alt" size={27} color="rgb(30,45,60)"/>},
              })}
        />
        <Drawer.Screen 
            name='setup' 
            component={DetailScreen}
            options={({ navigation }) => ({
                title: 'Configuración',
                drawerIcon:()=>{return <FontAwesome5 name="cog" size={25} color="rgb(30,45,60)"/>},
              })}
        />
=======
      <Drawer.Navigator initialRouteName='Home' screenOptions={{gestureEnabled: true}}>
        <Drawer.Screen name='Home' component={Home}/>
        <Drawer.Screen name='Detail' component={Detail}/>
>>>>>>> 6b4495228d7df0d7a965b10880e2a1a3eaee5fe8
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator

