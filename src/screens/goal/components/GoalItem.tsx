import { Pressable, StyleSheet, Text, View, Platform } from 'react-native';

export interface Goal {
  text: string;
  key: string;
}

function GoalItem(props: {
  goal: Goal;
  deleteGoalHandler: (_text: Goal) => void;
}) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: 'gray' }}
        onPress={() => props.deleteGoalHandler(props.goal)}
        style={({ pressed }) =>
          pressed && Platform.OS === 'ios' && styles.pressedItem
        }
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
