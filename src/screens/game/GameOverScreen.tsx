import { FlatList, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import { GameOverScreenRouteProp } from './../../lib/routes/types';

const GameOverScreen = ({ navigation, route }: GameOverScreenRouteProp) => {
  let guesses = route.params.guesses;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thanks for playing</Text>
      <View style={styles.guessContainer}>
        <Text style={styles.summary}>
          Number of rounds:{' '}
          <Text style={styles.summaryHighlight}>{guesses.length}</Text>
        </Text>

        <FlatList
          style={styles.guessesContainer}
          data={guesses}
          renderItem={({ index, item }) => (
            <Text key={index} style={styles.guess}>
              Guess {index + 1}: {item}
            </Text>
          )}
        />
      </View>
      <PrimaryButton
        style={styles.buttonContainer}
        onPress={() => navigation.popTo('StartGame')}
      >
        Try again
      </PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  guessContainer: {
    flex: 1,
  },
  guessesContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  summary: {
    fontSize: 16,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  summaryHighlight: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  guess: {
    fontSize: 12,
    marginHorizontal: 16,
    marginVertical: 4,
  },
  buttonContainer: {
    margin: 16,
  },
});

export default GameOverScreen;
