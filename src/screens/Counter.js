// Counter.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import useCounterViewModel from '../ViewModels/counterViewModel';

const Counter = () => {
  const { count, increment, decrement } = useCounterViewModel();

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button color="pink" title="Increment" onPress={increment} />
        <Button color="skyblue" title="Decrement" onPress={decrement} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
});

export default Counter;
