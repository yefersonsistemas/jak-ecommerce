import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import styled from 'styled-components';

const ViewNav = styled.View`
    padding:12px 12px;
    backgroundColor:rgb(250,250,250);
    height:55px;
    marginBottom:2%;
    borderBottomColor:rgb(220,220,220);
    borderBottomWidth:1px;
    elevation:1;
`

const ViewNavTransparent = styled.View`
    position:absolute;
    padding:12px 12px;
    backgroundColor:#ffffff00;
    width:100%;
    height:55px;
    marginBottom:2%;
    zIndex:1000;
`

const ViewRight = styled.View`
    width:4%;
    position:absolute;
    padding:1%;
    flex:1;
    justifyContent:space-between;
    flexDirection:row;
    right:1px;
    marginRight:8%;
    marginTop:3%;
`
const TextTitle = styled.Text`
    position:absolute;
    fontSize:24px;
    color:blue;
    left:14%;
    marginTop:1.8%;
`


class ClassNavbar extends Component {
  render() {
    return (
      <ViewNav>
        <TouchableOpacity onPress={()=>this.props.source.navigation.openDrawer()} style={{width:"6%"}}>
          <Ionicons name="ios-menu" size={28} color="#2eadf7"/>
        </TouchableOpacity>
        <ViewRight>
          <TouchableOpacity onPress={()=>alert('Search')}>
            <Ionicons name="ios-search" size={28} color="#2eadf7"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>alert('Search')}>
            {this.props.alert === true ? 
             <Ionicons name="ios-notifications" size={28} color="#2eadf7"/> :
             <Ionicons name="ios-cart" size={28} color="#2eadf7" /> }
             
          </TouchableOpacity>
        </ViewRight>
      </ViewNav>
    );
  }
}

class ClassNavbarTransparent extends Component {
  render() {
    return (
      <ViewNavTransparent>
        <TouchableOpacity onPress={()=>this.props.source.navigation.goBack()} style={{width:"6%"}}>
          <Ionicons name="md-arrow-back" size={28} color="#2eadf7" />
        </TouchableOpacity>
        <ViewRight>
          <TouchableOpacity onPress={()=>alert('Search')}>
            <Ionicons name="ios-search" size={28} color="#2eadf7"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>alert('Search')}>
            {this.props.alert === true ? 
             <Ionicons name="ios-notifications" size={28} color="#2eadf7"/> :
             <Ionicons name="ios-cart" size={28} color="#2eadf7" /> }
            
          </TouchableOpacity>
        </ViewRight>
      </ViewNavTransparent>
    );
  }
}

class ClassBackNavbar extends Component {
  render() {
    return (
      <ViewNav>
        <TouchableOpacity onPress={()=>this.props.source.navigation.goBack()} style={{width:"6%"}}>
          <Ionicons name="md-arrow-back" size={28} color="#2eadf7" />
        </TouchableOpacity>
    <TextTitle>{this.props.title}</TextTitle>
      </ViewNav>
    );
  }
}

module.exports = {
  Navbar: ClassNavbar,
  SNavbar: ClassBackNavbar,
  TNavbar: ClassNavbarTransparent
}