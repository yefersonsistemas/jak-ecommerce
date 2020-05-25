import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

export default function App(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
<<<<<<< HEAD
        onPress={() => navigation.navigate('Category')}>
=======
        onPress={() => navigation.navigate('Detail')}>
>>>>>>> 6b4495228d7df0d7a965b10880e2a1a3eaee5fe8
        <Text style={styles.buttonText}>Go to Detail Screen</Text>
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
