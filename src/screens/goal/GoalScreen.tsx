import { useRef, useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import uuid from 'react-native-uuid';
import GoalInput from './components/GoalInput';
import GoalItem, { Goal } from './components/GoalItem';

const GoalScreen = () => {
  const flatListRef = useRef<FlatList<Goal>>(null);

  const [enteredGoalText, setEnteredGoal] = useState<string>('');
  const [goals, setGoals] = useState<Goal[]>([]);

  const goalInputHandler = (enteredGoalText: string) => {
    setEnteredGoal(enteredGoalText);
  };

  const addGoalHandler = () => {
    setGoals(previousGoals => [
      ...previousGoals,
      { text: enteredGoalText, key: uuid.v4() },
    ]);
    setEnteredGoal('');
  };

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [goals]);

  const deleteGoalHandler = (goal: Goal) => {
    setGoals(previousGoals => previousGoals.filter(g => g.key != goal.key));
  };

  return (
    <View style={{ flex: 1 }}>
      <GoalInput
        enteredGoalText={enteredGoalText}
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
      />
      <FlatList
        style={{ flex: 1 }}
        data={goals}
        ref={flatListRef}
        renderItem={data => (
          <GoalItem goal={data.item} deleteGoalHandler={deleteGoalHandler} />
        )}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingVertical: 16,
  },
});

export default GoalScreen;
