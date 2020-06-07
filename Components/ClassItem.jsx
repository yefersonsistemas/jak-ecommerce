import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import Styled from 'styled-components/native';
import { AsyncImage } from './AsyncImage';

const ViewItemBox = Styled.View`
    padding:0;
    width:48%;
    minHeight:150px;
    margin:1% 1%;
    borderWidth:1px;
    borderColor:#eee;
    borderRadius:5px;
    elevation:4;
`;

const ViewItemDetailBox = Styled.View`
    width:100%;
    padding:2% 0 2% 4%;
    backgroundColor:#fff;
    borderBottomLeftRadius:5px;
    borderBottomRightRadius:5px;
`
const ImageItem = Styled(AsyncImage)`
    width:100%;
    height:150px;
    borderTopLeftRadius:5px;
    borderTopRightRadius:5px;
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
    fontSize:13px;
    color:gray;
`

export default class ClassItem extends Component {
    
    render(){
        const item = this.props.data;
        return (<ViewItemBox>
                <TouchableOpacity onPress={this.props.onPress}>
                 <ImageItem source={{uri: item.image[0]}} placeholderColor='#ccc'/>
                 <ViewItemDetailBox>
                    <TextTitleItem>{item.name}</TextTitleItem>
                    <TextPriceItem>${item.price}</TextPriceItem>
                    <TextFavouriteItem>
                      <Ionicons name="ios-star" size={15} color="#069671"/> {item.valoration}
                    </TextFavouriteItem>
                 </ViewItemDetailBox>
                </TouchableOpacity>
                </ViewItemBox>
                );
    }
}