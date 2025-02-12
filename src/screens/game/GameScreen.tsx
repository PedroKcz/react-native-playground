import { RouteProp } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';

type GameScreenRouteProp = RouteProp<
  { params: { userChoice: number } },
  'params'
>;

const GameScreen = ({ route }: { route: GameScreenRouteProp }) => {
  let userChoice = route.params.userChoice;
  const generateRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const [opponentGuess, setOpponentGuess] = useState<number>(
    generateRandomNumber(1, 100),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opponent's guess</Text>
      {userChoice === opponentGuess ? (
        <Text>Opponent guessed your number!</Text>
      ) : (
        <View>
          <Text>Opponent's guess is {opponentGuess}</Text>
          <View style={styles.buttonsContainer}>
            <PrimaryButton
              onPress={() => {
                setOpponentGuess(generateRandomNumber(1, opponentGuess));
              }}
            >
              Lower
            </PrimaryButton>
            <PrimaryButton
              onPress={() => {
                setOpponentGuess(generateRandomNumber(opponentGuess, 100));
              }}
            >
              Greater
            </PrimaryButton>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    borderWidth: 2,
    padding: 8,
    borderColor: 'mediumseagreen',
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameScreen;
