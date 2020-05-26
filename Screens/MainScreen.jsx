import React from 'react';
import { StyleSheet, Text, View, ScrollView,TouchableOpacity } from 'react-native';
import ItemBox from '../Components/ClassItem';
import Carrousel from '../Components/ClassCarrousel';

const images = [
  'https://utopico.co/wp-content/uploads/2019/05/mujer_estrellas_baj.jpg',
  'https://plenilunia.com/wp-content/uploads/2015/04/Depositphotos_30108693_original-562x375.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLqSZiDqX9JDgc0VSBpwouQG56iz2O3azDUOoDm24hHQOSO1QV&usqp=CAU'
];

export default function App(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <ScrollView>
        <Carrousel images={images}/>

        <View style={styles.containerItems}>
          <ItemBox title={"Camiseta Negra Camiseta Negra"} price={"$2"} fav={"5.00"}/>
          <ItemBox title={"Camiseta Negra"} price={"$2"} fav={"4.20"}/>
          <ItemBox title={"Camiseta Negra"} price={"$2"} fav={"5.00"}/>
          <ItemBox title={"Camiseta Negra"} price={"$2"} fav={"4.20"}/>
          <ItemBox title={"Camiseta Negra"} price={"$2"} fav={"5.00"}/>
        </View>
      </ScrollView>
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerItems: {
    flex:1,
    flexWrap:"wrap",
    flexDirection:"row",
    alignItems: 'center',
    width:"100%",
    paddingBottom: "4%"
  },
});
