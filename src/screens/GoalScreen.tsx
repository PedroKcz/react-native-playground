import { useEffect, useRef, useState } from 'react';
import { FlatList, KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import uuid from 'react-native-uuid';
import GoalInput from './../components/GoalInput';
import GoalItem, { Goal } from './../components/GoalItem';

const GoalScreen = () => {
  const flatListRef = useRef(null);

  const [enteredGoalText, setEnteredGoal] = useState<string>('');
  const [goals, setGoals] = useState<Goal[]>([]);

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [goals]);

  const goalInputHandler = (enteredGoalText: string) => {
    setEnteredGoal(enteredGoalText);
  };

  const addGoalHandler = () => {
    setGoals((previousGoals) => [
      ...previousGoals,
      { text: enteredGoalText, key: uuid.v4() },
    ]);
    setEnteredGoal('');
  };

  const deleteGoalHandler = (goal: Goal) => {
    setGoals((previousGoals) => previousGoals.filter((g) => g.key != goal.key));
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
          renderItem={(data) => (
            <GoalItem goal={data.item} deleteGoalHandler={deleteGoalHandler} />
          )}
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
