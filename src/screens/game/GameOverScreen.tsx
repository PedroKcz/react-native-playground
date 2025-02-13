import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View, StyleSheet } from 'react-native';
import RootStackParamList from './../../lib/routes/types';
import PrimaryButton from '../../components/PrimaryButton';

type GameOverScreenRouteProp = NativeStackScreenProps<
  RootStackParamList,
  'GameOver'
>;

const GameOverScreen = ({ navigation, route }: GameOverScreenRouteProp) => {
  let guesses = route.params.guesses;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Over with {guesses} guesses!</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    marginBottom: 16,
  },
  buttonContainer: {
    margin: 8,
  },
});

export default GameOverScreen;
