import { StyleSheet, TextInput, View, Alert } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import { useState } from 'react';

const StartGameScreen = ({ navigation }) => {
  const [numberInput, setNumberInput] = useState('');

  const handleNumberInput = (inputText: string) => {
    setNumberInput(inputText.replace(/[^0-9]/g, ''));
  };

  const handleResetInput = () => {
    setNumberInput('');
  };

  const handleConfirmInput = () => {
    const chosenNumber = parseInt(numberInput);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number', 'Number has to be between 1 and 99.', [
        { text: 'Try again', style: 'destructive', onPress: handleResetInput },
      ]);
    } else {
      navigation.navigate('GameScreen', { userChoice: chosenNumber });
    }
  };

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
          onChangeText={handleNumberInput}
          value={numberInput}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleResetInput}>Reset</PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleConfirmInput}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  inputContainer: {
    padding: 16,
    backgroundColor: 'azure',
    borderRadius: 8,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
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
    width: 64,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 4,
  },
});

export default StartGameScreen;
