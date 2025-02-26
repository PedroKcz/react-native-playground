import { FlatList, StyleSheet, Text, View } from 'react-native';
import Expense from '../models/Expense';
import ExpenseItem from './ExpenseItem';

const ExpenseSummary = ({
  expenses,
  period,
  onPress,
}: {
  expenses: Expense[];
  onPress: (_id: string) => void;
  period?: string | undefined;
}) => {
  return (
    <View style={style.container}>
      <View style={style.summary}>
        {period && <Text style={style.label}>Period: {period}</Text>}
        <View style={style.total}>
          <Text style={style.label}>Total: </Text>
          <Text style={style.sum}>
            $
            {expenses
              .reduce((acc, expense) => acc + expense.amount, 0)
              .toFixed(2)}
          </Text>
        </View>
      </View>

      <FlatList
        style={style.list}
        data={expenses}
        renderItem={({ item }) => (
          <ExpenseItem expense={item} onPress={onPress} />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={style.separator} />}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  summary: {
    padding: 16,
    backgroundColor: 'lightblue',
    borderRadius: 8,
    margin: 16,
    gap: 8,
  },
  label: {
    fontSize: 16,
  },
  total: {
    flexDirection: 'row',
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    height: 8,
  },
  list: {
    flex: 1,
  },
});

export default ExpenseSummary;
