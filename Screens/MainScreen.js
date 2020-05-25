import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity  } from 'react-native';
import ItemBox from '../Components/ClassItem';


export default function App(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Category')}>
        <Text style={styles.buttonText}>Go to Detail Screen</Text>
      </TouchableOpacity>


      <ScrollView>
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
