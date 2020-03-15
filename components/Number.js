import React from 'react';
import Colors from '../constants/colors'
import { View, Text, StyleSheet } from 'react-native';

const Number = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: Colors.primary,
    fontSize: 22
  }
})

export default Number;