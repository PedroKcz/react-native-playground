import { StyleSheet, View, Text } from 'react-native';

interface GoalItemProps {
  text: string;
}

function GoalItem({ text }: GoalItemProps) {
  return (
    <View style={styles.goalItem}>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 6,
    borderColor: 'gray',
    padding: 16,
    borderWidth: 1,
  },
});

export default GoalItem;
