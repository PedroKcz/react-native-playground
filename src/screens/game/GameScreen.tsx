import { useEffect, useMemo, useState } from 'react';
import { Alert, Platform, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import { GameScreenRouteProp } from './../../lib/routes/types';

const GameScreen = ({ route, navigation }: GameScreenRouteProp) => {
  let userChoice = route.params.userChoice;

  const [opponentGuess, setOpponentGuess] = useState<number | undefined>(
    undefined,
  );
  const [maxBound, setMaxBound] = useState<number>(100);
  const [minBound, setMinBound] = useState<number>(1);
  const [guesses, setGuesses] = useState<number[]>([]);

  const generateRandomGuess = () => {
    return Math.floor(Math.random() * (maxBound - minBound)) + minBound;
  };

  const showCheatingAlert = () => {
    Alert.alert(
      'Cheating detected!',
      'You cannot lie to me! Now the game is over',
      [
        {
          text: 'Sorry',
          style: 'destructive',
          onPress: () => setOpponentGuess(userChoice),
        },
      ],
    );
  };

  const handleNextGuess = (isLower: boolean) => {
    if (isLower) {
      userChoice >= opponentGuess
        ? showCheatingAlert()
        : setMaxBound(opponentGuess);
    } else {
      userChoice <= opponentGuess
        ? showCheatingAlert()
        : setMinBound(opponentGuess + 1);
    }
  };

  useMemo(() => setOpponentGuess(generateRandomGuess()), [maxBound, minBound]);

  useMemo(() => {
    if (opponentGuess) setGuesses(guesses => guesses.concat(opponentGuess));
  }, [opponentGuess]);

  useEffect(() => {
    if (opponentGuess === userChoice) {
      navigation.navigate('GameOver', { guesses: guesses });
    }
  }, [guesses]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opponent's guess</Text>
      <View style={styles.guessContainer}>
        <Text>{opponentGuess}</Text>
      </View>
      <Text style={styles.label}>Is your number lower or greater?</Text>
      <View style={styles.buttonsContainer}>
        <PrimaryButton
          style={styles.buttonContainer}
          onPress={() => handleNextGuess(true)}
        >
          Lower
        </PrimaryButton>

        <PrimaryButton
          style={styles.buttonContainer}
          onPress={() => handleNextGuess(false)}
        >
          Greater
        </PrimaryButton>
      </View>
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
    borderRadius: Platform.select({ ios: 16, android: 8 }),
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
