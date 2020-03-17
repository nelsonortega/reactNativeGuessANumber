import React, {useState, useRef, useEffect} from 'react'
import Card from '../components/Card'
import Number from '../components/Number'
import { StyleSheet, View, Text, Button, Alert } from 'react-native'

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const randomNumber = Math.floor(Math.random() * (max - min)) + min

  if (randomNumber === exclude) {
    generateRandomBetween(min, max, exclude)
  } else {
    return randomNumber
  }
}

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoise))
  const [rounds, setRounds] = useState(0)

  const currentLow = useRef(1)
  const currentHigh = useRef(100)

  const {userChoise, onGameOver} = props

  useEffect(() => {
    if (currentGuess === userChoise) {
      onGameOver(rounds)
    }
  }, [currentGuess, userChoise, onGameOver])

  const nextGuess = direction => {
    if ((direction === 'lower' && currentGuess < props.userChoise) || (direction === 'greater' && currentGuess > props.userChoise)) {
      Alert.alert('Don\'t Lie!')
      return
    }

    if (direction === 'lower'){
      currentHigh.current = currentGuess
    } else {
      currentLow.current = currentGuess
    }

    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
    setCurrentGuess(nextNumber)
    setRounds(currentRounds => currentRounds + 1)
  }

  return(
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <Number>{currentGuess}</Number>
      <Card style={styles.buttonContainer}> 
        <Button title="Lower" onPress={nextGuess.bind(this, 'lower')} />
        <Button title="Greater" onPress={nextGuess.bind(this, 'greater')} />
      </Card>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  }
})
    
export default GameScreen