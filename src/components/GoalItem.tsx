import { Pressable, StyleSheet, Text, View } from 'react-native';

export interface Goal {
  text: string;
  key: string;
}

function GoalItem(props: {
  goal: Goal;
  deleteGoalHandler: (text: Goal) => void;
}) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: 'gray' }}
        onPress={props.deleteGoalHandler.bind(this, props.goal)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.goal.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 6,
    borderColor: 'gray',
    borderWidth: 1,
    overflow: 'hidden',
  },
  goalText: {
    padding: 16,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
