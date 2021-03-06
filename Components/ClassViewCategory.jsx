import React,{Component} from 'react';
import { ScrollView,TouchableOpacity,Dimensions } from 'react-native';
import styled from 'styled-components';
import { AsyncImageCircle } from './AsyncImage';

const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

const images = [{
  name:'LenceriaLenceria',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMctLhYdiOZUMx4h8PDjsVZiD04FDa1AYBpJrGJjh_NszoveVv&usqp=CAU&h=1'
},{
  name:'Lenceria',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMctLhYdiOZUMx4h8PDjsVZiD04FDa1AYBpJrGJjh_NszoveVv&usqp=CAU&h=2'
},{
  name:'Lenceria',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMctLhYdiOZUMx4h8PDjsVZiD04FDa1AYBpJrGJjh_NszoveVv&usqp=CAU&h=3'
},{
  name:'Lenceria',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMctLhYdiOZUMx4h8PDjsVZiD04FDa1AYBpJrGJjh_NszoveVv&usqp=CAU&h=4'
},
];


const ViewLayout = styled.View`
      width:100%;
      marginTop:2%;
      overflow:scroll;
      height:${DEVICE_HEIGHT*0.185}px;
`
const Caption = styled.Text`
      color:#555;
      fontSize:13px;
      width:${DEVICE_WIDTH*0.22}px;
      fontWeight:bold;
      textAlign:center;
      marginLeft:${DEVICE_WIDTH*0.01}px;
`

const ImageCircle = styled(AsyncImageCircle)`
    marginLeft:${DEVICE_WIDTH*0.005}px;
    marginRight:${DEVICE_WIDTH*0.02}px;
    width:${DEVICE_WIDTH*0.22}px;
    height:${DEVICE_HEIGHT*0.12}px;
`


export default class ViewCategory extends Component {

  render(){

    return (
    <ViewLayout>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {images.map((category,i) =>(
              <TouchableOpacity key={(i+1)*100}>
                <ImageCircle
                   key={i}
                   source={{uri: category.image}}
                   placeholderColor='#ccc'
                />
                <Caption>{category.name}</Caption>
              </TouchableOpacity>
            )) }
        </ScrollView>
    </ViewLayout>
    );
  }
}
