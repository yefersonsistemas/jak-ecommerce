import React from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components';
import { Navbar } from '../Components/ClassNavbar'
import ItemBox from '../Components/ClassItem';
import Carrousel from '../Components/ClassCarrousel';
import SplashScreen from './SplashScreen';
import Parallax from './Parallax';
import ViewCategory from '../Components/ClassViewCategory';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

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
      padding: 0% 1%;
`

function Store(props) {
  const {route,navigation} = props;
  const store = route.params.store;

  return (
    <ViewLayout>
      <Navbar source={props} alert={false}/>
        <ScrollView>
          <ViewBody>
            <Carrousel images={store.slider}/>

            <ViewCategory/>

            <ViewContentItems>

              {
                store.items.map(item =>(
                  <ItemBox key={item.id} data={item} onPress={() => navigation.navigate('parallax',{data:item})}/>
                ))
              }

            </ViewContentItems>

          </ViewBody>
        </ScrollView>
    </ViewLayout>
  );
}


export default class Main extends React.Component {
  render(){
    return (
     <Stack.Navigator headerMode="none">
      <Stack.Screen name="load" component={SplashScreen}/>
      <Stack.Screen name="main" component={Store}/>
      <Stack.Screen name="parallax" component={Parallax}/>
    </Stack.Navigator>
    );
  }
}
