import { RouteProp } from '@react-navigation/native';
import { useEffect, useState } from 'react';
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
  const [maxBound, setMaxBound] = useState<number>(100);
  const [minBound, setMinBound] = useState<number>(1);

  const handleNextGuess = (isLower: boolean) => {
    if (isLower) {
      setMaxBound(opponentGuess);
    } else {
      setMinBound(opponentGuess + 1);
    }
  };

  useEffect(
    () => setOpponentGuess(generateRandomNumber(minBound, maxBound)),
    [maxBound, minBound],
  );

  return (
    <View style={styles.container}>
      {userChoice === opponentGuess ? (
        <Text>Opponent guessed your number!</Text>
      ) : (
        <View>
          <Text style={styles.title}>Opponent's guess</Text>
          <View style={styles.guessContainer}>
            <Text>{opponentGuess}</Text>
          </View>
          <Text style={styles.label}>Is your number lower or greater?</Text>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={() => handleNextGuess(true)}>
                Lower
              </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={() => handleNextGuess(false)}>
                Greater
              </PrimaryButton>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    padding: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignContent: 'space-evenly',
    justifyContent: 'center',
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 4,
  },
  guessContainer: {
    padding: 16,
    backgroundColor: 'azure',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'black',
    textAlign: 'center',
    padding: 8,
  },
});

export default GameScreen;
