import React from 'react';
import { StatusBar, Image } from 'react-native';
import Styled from 'styled-components/native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const ViewPerfil = Styled.View`
    padding:2% 10%;
    backgroundColor:rgb(250,250,250);
    height:80px;
    marginBottom:5%;
`;

/*****************************************/
/*            CARGA DE SCREENS          */
/***************************************/
import MainScreen from './Screens/MainScreen';
import CategoryScreen from './Screens/CategoryScreen';




/*****************************************/
/* INICIO DE DECLARACION DE MANEJADORES */
/***************************************/
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <ViewPerfil>
        <Image source={require("./assets/perfil.png")}/>
      </ViewPerfil>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <StatusBar hidden={false} backgroundColor={'white'} barStyle={'dark-content'}/> 
      <Drawer.Navigator initialRouteName='Home' drawerContentOptions={{activeTintColor: '#1aafffdd'}}
                                                drawerContent={props => <CustomDrawerContent {...props} />}>
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
            component={CategoryScreen}
            options={({ navigation }) => ({
                title: 'Categorias',
                drawerIcon:()=>{return <Ionicons name="ios-list-box" size={26} color="rgb(30,45,60)"/>},
              })}
        />
        <Drawer.Screen 
            name='Favourite' 
            component={CategoryScreen}
            options={({ navigation }) => ({
                title: 'Mis Favoritos',
                drawerIcon:()=>{return <Ionicons name="ios-heart" size={28} color="rgb(30,45,60)"/>},
              })}
        />
        <Drawer.Screen 
            name='Cart' 
            component={CategoryScreen}
            options={({ navigation }) => ({
                title: 'Mi Carrito',
                drawerIcon:()=>{return <Ionicons name="ios-cart" size={28} color="rgb(30,45,60)"/>},
              })}
        />
        <Drawer.Screen 
            name='Order' 
            component={CategoryScreen}
            options={({ navigation }) => ({
                title: 'Mi Carrito',
                drawerIcon:()=>{return <FontAwesome5 name="clipboard-list" size={27} color="rgb(30,45,60)"/>},
              })}
        />
        <Drawer.Screen 
            name='Address' 
            component={CategoryScreen}
            options={({ navigation }) => ({
                title: 'Mi Direccion',
                drawerIcon:()=>{return <FontAwesome5 name="map-marker-alt" size={27} color="rgb(30,45,60)"/>},
              })}
        />
        <Drawer.Screen 
            name='setup' 
            component={CategoryScreen}
            options={({ navigation }) => ({
                title: 'Configuración',
                drawerIcon:()=>{return <FontAwesome5 name="cog" size={25} color="rgb(30,45,60)"/>},
              })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator

