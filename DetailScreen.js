import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text>Detail Screnn</Text>
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => navigation.navigate('Home')}>
      <Text style={styles.buttonText}>Go to Home Screen</Text>
    </TouchableOpacity>
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
});
