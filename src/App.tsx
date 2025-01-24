import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect, useRef } from 'react';
import uuid from 'react-native-uuid';

interface Goal {
  text: string;
  key: string;
}

const App = () => {
  const flatListRef = useRef(null);

  const [enteredGoalText, setEnteredGoal] = useState<string>('');
  const [goals, setGoal] = useState<Goal[]>([]);

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [goals]);

  const goalInputHandler = (enteredGoalText: string) => {
    setEnteredGoal(enteredGoalText);
  };

  const addGoalHandler = () => {
    setGoal((previousGoals) => [
      ...previousGoals,
      { text: enteredGoalText, key: uuid.v4() },
    ]);
    setEnteredGoal('');
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Your goal"
              style={styles.textInput}
              value={enteredGoalText}
              onChangeText={goalInputHandler}
            />
            <Button title="Add goal" onPress={addGoalHandler} />
          </View>

          <FlatList
            data={goals}
            ref={flatListRef}
            renderItem={(data) => (
              <View style={styles.goalItem}>
                <Text>{data.item.text}</Text>
              </View>
            )}
            contentContainerStyle={{ paddingVertical: 16 }}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
    marginEnd: 16,
  },
  goalItem: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 6,
    borderColor: 'gray',
    padding: 16,
    borderWidth: 1,
  },
});

export default App;
