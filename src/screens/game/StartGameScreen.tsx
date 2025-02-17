import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import { StartGameScreenRouteProp } from './../../lib/routes/types';

const StartGameScreen = ({ navigation }: StartGameScreenRouteProp) => {
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
      navigation.navigate('Game', { userChoice: chosenNumber });
    }
  };

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={styles.gameContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.title}>Enter a number</Text>

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
              <PrimaryButton
                style={styles.buttonContainer}
                onPress={handleResetInput}
              >
                Reset
              </PrimaryButton>

              <PrimaryButton
                style={styles.buttonContainer}
                onPress={handleConfirmInput}
              >
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  gameContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
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
