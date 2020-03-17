import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Card from '../components/Card';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text>The game is over!</Text>
        <Text>Number of rounds: {props.rounds}</Text>
        <Text>Number was: {props.userNumber}</Text>
        <View style={styles.newGameButton}>
          <Button title="New Game" onPress={props.onNewGame} />
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    alignItems: 'center'
  },
  newGameButton: {
    paddingTop: 25
  }
})
    
export default GameOverScreen