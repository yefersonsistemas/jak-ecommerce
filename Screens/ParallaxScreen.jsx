import React,{Component} from 'react';
import { ScrollView,TouchableOpacity,Dimensions } from 'react-native';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons'; 
import ItemBox from '../Components/ClassItem';
import { TNavbar } from '../Components/ClassNavbar'
import Carrousel from '../Components/ClassImagesContent';

const DEVICE_HEIGHT = Dimensions.get('window').height;

const ViewLayout = styled.View`
      width:100%;
      height:100%;
`

const ViewContentItems = styled.View`
    flex:1;
    flexWrap:wrap;
    flexDirection:row;
    alignItems:flex-start;
    width:100%;
    paddingBottom:4%;
`

const ViewBody = styled(ViewLayout)`
      padding: 0;
      backgroundColor:#fff;
      padding:1% 0;
`

const ViewFavourite = styled.View`
      position:absolute;
      backgroundColor:#1c9654;
      right:0px;
      top:${DEVICE_HEIGHT*0.35}px;
      height:32px;
      width:20%;
      padding:4% 10%;
      borderTopLeftRadius:3px;
      borderBottomLeftRadius:3px;
      flex:1;
      flexDirection:row;
      justifyContent:space-between;
`

const ViewBlock = styled.View`
    width:100%;
    borderColor:lightgray;
    borderBottomWidth:1px;
    padding:2% 4%;
    margin-bottom:1%;
    height:${DEVICE_HEIGHT*0.14}px;
`

const ViewBlockDetail = styled.View`
    width:100%;
    borderColor:lightgray;
    borderBottomWidth:1px;
    padding:3% 4%;
    height:${DEVICE_HEIGHT*0.2}px;
`


const TouchValoration = styled(TouchableOpacity)`
   flex:1;
   flexWrap:wrap;
   flexDirection:row;
   alignItems:flex-start;
   marginTop:2%;
   width:40%;
   minHeight:20px;
`

const NumberValoration = styled.Text`
   fontWeight:bold;
   fontSize:14px;
   marginLeft:15%;
   color:#1c9654;
`

const TextTitle = styled.Text`
    color:black;
    fontWeight:bold;
    fontSize:17px;
    flexDirection: row;
    flex: 1;
    justifyContent:space-around;
    overflow: hidden;
    minHeight:${DEVICE_HEIGHT*0.03}px;
`

const TextPrice = styled.Text`
    color:#1c9654;
    position:absolute;
    fontWeight:bold;
    fontSize:24px;
    right:15%;
    top:65%;
`

const TextDescription = styled.Text`
    color:#555;
    fontSize:15px;
`

const TextBlock14 = styled.Text`
    color:#555;
    fontWeight:bold;
    fontSize:14px;
`

const TextBlock17 = styled.Text`
    color:#222;
    fontWeight:bold;
    fontSize:17px;
`

const ViewQuantity = styled.View`
    left:0px;
    width:45%;
    alignItems:center;
    height:100px;
`

const ViewPriceAuto = styled.View`
    position:absolute;
    right:0px;
    width:45%;
    alignItems:center;
    marginTop:2.5%;
`

const ViewInline = styled.View`
    width:50%;
    flex:1;
    flexWrap:wrap;
    flexDirection:row;
    alignItems:flex-start;
    justifyContent:space-between;
`
const ViewControls = styled.View`
    width:100%;
    padding:2%;
    borderColor:lightgray;
    borderBottomWidth:1px;
    height:${DEVICE_HEIGHT*0.1}px;
`

const ViewSpace = styled.View`
   width:100%;
   height:1px;
   margin:2% 0;
`

const BottomBuy = styled(TouchableOpacity)`
   width:50%;
   backgroundColor:#1c71a3;
   alignItems:center;
   justifyContent:center;
   height:${DEVICE_HEIGHT*0.07}px;
`
const BottomAdd = styled(TouchableOpacity)`
   width:50%;
   backgroundColor:#1c9654;
   alignItems:center;
   justifyContent:center;
   height:${DEVICE_HEIGHT*0.07}px;
`
const BottomGroup = styled.View`
  width:100%;
  flex:1;
  flexWrap:wrap;
  flexDirection:row;
  marginTop:${DEVICE_HEIGHT*0.017}px;
`

const TextBottom = styled.Text`
   color:white;
   fontSize:24px;
`

const ViewInlineReviews = styled.View`
  width:100%;
  flex:1;
  flexWrap:wrap;
  flexDirection:row;
  marginTop:${DEVICE_HEIGHT*0.01}px;
`
const ReviewLink = styled.Text`
  color:#1c9654;
  fontSize:14px;
  textDecoration: underline;
  margin-left:15%;
`


function decimalAdjust(type, value, exp) {
    // Si el exp no está definido o es cero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Si el valor no es un número o el exp no es un entero...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}


export default class Parallax extends Component {

  constructor(props){
    super(props);

    this.state = {
      totalPrice:0,
      quantity:0
    };
  }

  addItem(){
    this.setState((state,props)=>({quantity: state.quantity+1,
    totalPrice:props.route.params.data.price*(state.quantity+1)}));
  }

  removeItem(){
    if (this.state.quantity > 0){
      this.setState((state,props)=>({quantity: this.state.quantity-1,
        totalPrice:props.route.params.data.price*(state.quantity-1)}));
    }
  }

  render(){
    const item = this.props.route.params.data;
    const valoration= new Array();
    for(let i=1;i<=5;i++){
      if (item.valoration == 0)
        valoration[i-1] = "md-star-outline"; // vacia
      else if(item.valoration>=i)
        valoration[i-1] = "md-star"; // llena
      else if(item.valoration<=(i-1))
        valoration[i-1] = "md-star-outline"; //vacia
      else
        valoration[i-1] = "md-star-half"; //media llena
    }

    return (
    <ViewLayout>
        <ScrollView>
          <TNavbar source={this.props} alert={false}/>          
          <Carrousel images={item.image}/>
          <ViewFavourite>
            <TouchableOpacity>
                <Ionicons name="md-heart-empty" size={26} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="md-share" size={26} color="white" />
            </TouchableOpacity>
          </ViewFavourite>
          <ViewBody>
            <ViewBlock>
                <TextTitle>{item.name}</TextTitle>
                <TouchValoration>
                  {valoration.map((star,i)=>(
                    <Ionicons key={i} name={star} size={18} color="#1c9654" />
                  ))}
                <NumberValoration>{item.valoration}</NumberValoration>
                </TouchValoration>

                <TextPrice>${item.price}</TextPrice>

                <ViewInlineReviews>
                <TextBlock14 style={{fontWeight:"600"}}>1 Reviews</TextBlock14>

                <TouchableOpacity>
                  <ReviewLink>Ratings and Reviews</ReviewLink>
                </TouchableOpacity>

                </ViewInlineReviews>
            </ViewBlock>

            <ViewBlockDetail>
                <TextDescription>{item.description}</TextDescription>
            </ViewBlockDetail>

            <ViewControls>
              
              <ViewQuantity>
                <TextBlock14>Quantity</TextBlock14>
                <ViewSpace/>
                <ViewInline>
                    <TouchableOpacity onPress={()=>{this.addItem()}}>
                      <Ionicons name="ios-add-circle" size={28} color="#1c9654" />
                    </TouchableOpacity>
                  <TextBlock14>{this.state.quantity}</TextBlock14>
                    <TouchableOpacity onPress={()=>{this.removeItem()}}>
                      <Ionicons name="ios-remove-circle" size={28} color="#1c9654" />
                    </TouchableOpacity>
                </ViewInline>
              </ViewQuantity>
                
              <ViewPriceAuto>
                <TextBlock14>Total Price</TextBlock14>
                <ViewSpace/>
                <TextBlock17>${decimalAdjust('round', this.state.totalPrice, -2)}</TextBlock17>
              </ViewPriceAuto>

            </ViewControls>
            
            <BottomGroup>
            <BottomBuy>
              <TextBottom>Buy Now</TextBottom>
            </BottomBuy>
            <BottomAdd>
              <TextBottom>Add to Cart</TextBottom>
            </BottomAdd>
            </BottomGroup>

          </ViewBody>
        </ScrollView>
    </ViewLayout>
    );
  }
}
