import { Pressable, TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';

const StartGameScreen = () => {
  return (
    <View style={styles.gameContainer}>
      <View style={styles.inputContainer}>
        <TextInput />

        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    padding: 16,
    backgroundColor: 'purple',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

export default StartGameScreen;
