import {
  Button,
  GestureResponderEvent,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

const GoalInput = (props: {
  enteredGoalText: string;
  goalInputHandler: (text: string) => void;
  addGoalHandler: (event: GestureResponderEvent) => void;
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your goal"
        style={styles.textInput}
        value={props.enteredGoalText}
        onChangeText={props.goalInputHandler}
      />
      <Button title="Add goal" onPress={props.addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    flex: 1,
    padding: 8,
    marginEnd: 16,
  },
});

export default GoalInput;
