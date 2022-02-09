import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sampleText}>Hello World!</Text>
    </View>
  );
};
export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sampleText: {
    fontSize: 28,
    color: 'dodgerblue',
    fontWeight: 'bold',
  },
});