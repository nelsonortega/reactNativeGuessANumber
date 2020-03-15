import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const randomNumber = Math.floor(Math.random() * (max - min)) + min

  if (randomNumber === exclude) {
    generateRandomBetween(min, max, exclude)
  } else {
    return randomNumber
  }
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoise));
};

const styles = StyleSheet.create({

});
    
export default GameScreen;