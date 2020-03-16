import Card from '../components/Card';
import Input from '../components/Input';
import React, { useState } from 'react';
import Colors from '../constants/colors';
import Number from '../components/Number';
import { StyleSheet, View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

const StartGameScreen = props => {

  let confirmedOutput;

  const [confirmed, setConfirmed] = useState(false);
  const [enteredValue, setEnteredValue] = useState('');
  const [selectedNumber, setSelectedNumber] = useState();

  const inputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const closeKeyboard = () => {
    Keyboard.dismiss();
  };

  const resetInput = () => {
    setConfirmed(false);
    setEnteredValue('');
  };

  const confirmInput = () => {
    const chosenNumber = parseInt(enteredValue);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number', 
        'Number has to be between 1 and 99', 
        [{text: 'Okay', style: 'destructive', onPress: resetInput}]
      );
      return;
    }

    closeKeyboard();
    setConfirmed(true);
    setEnteredValue('');
    setSelectedNumber(chosenNumber);
  };

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.confirmedOutput}>
        <Text>You selected</Text>
        <Number>{selectedNumber}</Number>
        <Button title="Start Game" color={Colors.primary} onPress={() => props.onStartGame(selectedNumber)}/>
      </Card>
    )
  }

  return(
    <TouchableWithoutFeedback onPress={closeKeyboard}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input style={styles.input} 
            blurOnSubmit 
            keyboardType="number-pad" 
            maxLength={2} 
            onChangeText={inputHandler}
            value={String(enteredValue)}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}><Button title='Reset' onPress={resetInput} color={Colors.secondary} /></View> 
            <View style={styles.button}><Button title='Confirm' onPress={confirmInput} color={Colors.primary} /></View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  )
}
  
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: 100
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 20
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  confirmedOutput: {
    marginTop: 20,
    alignItems: 'center'
  }
})
  
export default StartGameScreen;