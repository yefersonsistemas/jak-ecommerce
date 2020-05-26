import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';
import { Fontisto } from '@expo/vector-icons'; 
import Styled from 'styled-components/native';

const ViewItemBox = Styled.View`
    padding:0 0 1% 0;
    borderWidth:1px;
    borderColor:rgb(235,235,235);
    borderRadius:3px;
    justifyContent: center;
    alignItems:center;
    width:48%;
    minHeight:150px;
    margin:1% 1%;
    elevation:4;
`;

const ViewItemDetailBox = Styled.View`
    width:100%;
    padding:2% 0 2% 4%;
`
const ImageItem = Styled.Image`
    width:100%;
    height:150px;
    resizeMode: stretch;
`

const TextTitleItem = Styled.Text`
    color:#5a5a5a;
    fontWeight:bold;
`

const TextPriceItem = Styled.Text`
    marginTop:4%;
    fontWeight:bold;
    color:#069671;
    fontSize:16px;
`

const TextFavouriteItem = Styled.Text`
    marginTop:2%;
    fontSize:12px;
    color:gray;
`

export default class ClassItem extends Component {
    render(){
        return (<ViewItemBox>
                 <ImageItem source={require("../assets/item.png")}/>
                 <ViewItemDetailBox>
                    <TextTitleItem>{this.props.title}</TextTitleItem>
                    <TextPriceItem>{this.props.price}</TextPriceItem>
                    <TextFavouriteItem>
                      <Fontisto name="star" size={14} color="#069671"/> {this.props.fav}
                    </TextFavouriteItem>
                 </ViewItemDetailBox>
                </ViewItemBox>);
    }
}