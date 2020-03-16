import React, {useState} from 'react'
import  Header  from './components/Header'
import  GameScreen  from './screens/GameScreen'
import { StyleSheet, View } from 'react-native'
import  StartGameScreen  from './screens/StartGameScreen'


export default function App() {
  const [userNumber, setUserNumber] = useState()

  const startGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = userNumber ? <GameScreen userChoise={userNumber} /> : <StartGameScreen onStartGame={startGame} />

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
