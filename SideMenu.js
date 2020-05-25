import React, {Component} from 'react';
import {StatusBar,ScrollView,TouchableHighlight, Image, Dimensions,Text } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; 
import Styled from 'styled-components/native';

const ViewContainer = Styled.View`
    position:relative;
    backgroundColor:rgb(255,255,255);
    width:70%;
    borderColor:rgb(220,220,220);
    borderRightWidth:1px;
    zIndex:1000;
`;

const ViewPerfil = Styled.View`
    padding:2% 10%;
    backgroundColor:rgb(240,240,240);
    height:120px;
`;

const TextItem = Styled.Text`
    marginLeft:6%;
    padding:5% 0;
    fontSize:17px;
    color:rgb(30,45,60);
`;

export default class SideMenu extends Component {
  render(){
    return (
      <ViewContainer style={{height:Dimensions.get('window').height}}>
        <ScrollView>
            <StatusBar hidden={false} backgroundColor={'white'} barStyle={'dark-content'}/>

            <ViewPerfil>      
                <Image source={require('./assets/perfil.png')}></Image>
            </ViewPerfil>

            <TouchableHighlight activeOpacity={0.8} underlayColor="#EEE" onPress={() => alert('Pressed!')}>
                 <TextItem><Ionicons name="ios-home" size={28} color="rgb(30,45,60)"/>    Inicio</TextItem>
            </TouchableHighlight>

            <TouchableHighlight activeOpacity={0.8} underlayColor="#EEE" onPress={() => alert('Pressed!')}>
                <TextItem><Ionicons name="ios-list-box" size={26} color="rgb(30,45,60)"/>    Categorias</TextItem>
            </TouchableHighlight>

            <TouchableHighlight activeOpacity={0.8} underlayColor="#EEE" onPress={() => alert('Pressed!')}>
                <TextItem><Ionicons name="ios-heart" size={26} color="rgb(30,45,60)"/>    Mis Favoritos</TextItem>
            </TouchableHighlight>

            <TouchableHighlight activeOpacity={0.8} underlayColor="#EEE" onPress={() => alert('Pressed!')}>
                <TextItem><Ionicons name="ios-cart" size={26} color="rgb(30,45,60)"/>    Mi Carrito</TextItem>
            </TouchableHighlight>

            <TouchableHighlight activeOpacity={0.8} underlayColor="#EEE" onPress={() => alert('Pressed!')}>
                <TextItem><FontAwesome5 name="clipboard-list" size={27} color="rgb(30,45,60)"/>    Mis Pedidos</TextItem>
            </TouchableHighlight>

            <TouchableHighlight activeOpacity={0.8} underlayColor="#EEE" onPress={() => alert('Pressed!')}>
                <TextItem><FontAwesome5 name="map-marker-alt" size={27} color="rgb(30,45,60)"/>    Dirección</TextItem>
            </TouchableHighlight>

            <TouchableHighlight activeOpacity={0.8} underlayColor="#EEE" onPress={() => alert('Pressed!')}>
                <TextItem><FontAwesome5 name="cog" size={25} color="rgb(30,45,60)"/>   Configuración</TextItem>
            </TouchableHighlight>

        </ScrollView>
      </ViewContainer>
    );
  }
}


