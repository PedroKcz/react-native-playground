import { StyleSheet, TextInput, View } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';

const StartGameScreen = () => {
  return (
    <View style={styles.gameContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          returnKeyType="done"
          autoCorrect={false}
        />

        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
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
    backgroundColor: 'darkmagenta',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    fontSize: 32,
    borderBottomColor: 'mediumseagreen',
    borderBottomWidth: 2,
    color: 'mediumseagreen',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 8,
  },
});

export default StartGameScreen;
