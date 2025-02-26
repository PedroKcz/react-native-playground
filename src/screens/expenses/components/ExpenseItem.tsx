import { StyleSheet, Text, View } from 'react-native';
import PressableCard from '../../../components/PressableCard';
import Expense from '../models/Expense';

const ExpenseItem = ({
  expense,
  onPress,
}: {
  expense: Expense;
  onPress: (_id: string) => void;
}) => {
  return (
    <PressableCard style={style.container} onPress={() => onPress(expense.id)}>
      <Text style={style.title}>{expense.title}</Text>
      <View style={style.expenseDetails}>
        <Text style={style.description}>{expense.date.toDateString()}</Text>
        <Text style={style.description}>${expense.amount.toFixed(2)}</Text>
      </View>
    </PressableCard>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    gap: 8,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
  },
  expenseDetails: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  description: {
    fontSize: 14,
  },
});

export default ExpenseItem;
