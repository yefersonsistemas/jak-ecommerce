import React from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components';
import { Navbar } from '../Components/ClassNavbar'
import ItemBox from '../Components/ClassItem';
import Carrousel from '../Components/ClassCarrousel';
import ViewCategory from '../Components/ClassViewCategory';

const ViewLayout = styled.View`
      width:100%;
      height:100%;
      backgroundColor:#ddd;
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

export default function Store(props) {
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