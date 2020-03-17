import React, {useState} from 'react'
import  Header  from './components/Header'
import  GameScreen  from './screens/GameScreen'
import { StyleSheet, View } from 'react-native'
import  StartGameScreen  from './screens/StartGameScreen'
import  GameOverScreen  from './screens/GameOverScreen'


export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)

  const startNewGame = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }

  const startGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  const gameOver = numberOfRounds => {
    setGuessRounds(numberOfRounds)
  }

  let content = <StartGameScreen onStartGame={startGame} />

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoise={userNumber} onGameOver={gameOver} /> 
  } else if (guessRounds > 0) {
    content = <GameOverScreen rounds={guessRounds} userNumber={userNumber} onNewGame={startNewGame} />
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})
