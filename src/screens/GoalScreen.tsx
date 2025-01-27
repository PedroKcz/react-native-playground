import { useEffect, useRef, useState } from 'react';
import { FlatList, KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import uuid from 'react-native-uuid';
import GoalInput from './../components/GoalInput';
import GoalItem from './../components/GoalItem';

interface Goal {
  text: string;
  key: string;
}

const GoalScreen = () => {
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
    <KeyboardAvoidingView>
      <View>
        <GoalInput
          enteredGoalText={enteredGoalText}
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
        />
        <FlatList
          data={goals}
          ref={flatListRef}
          renderItem={(data) => <GoalItem text={data.item.text} />}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingVertical: 16,
  },
});

export default GoalScreen;
