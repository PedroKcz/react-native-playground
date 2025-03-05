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
              ?.toFixed(2)}
          </Text>
        </View>
      </View>

      {expenses.length === 0 ? (
        <Text style={style.noExpensesLabel}>No expenses</Text>
      ) : (
        <FlatList
          style={style.list}
          data={expenses}
          renderItem={({ item }) =>
            item && <ExpenseItem expense={item} onPress={onPress} />
          }
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={style.separator} />}
          contentContainerStyle={style.contentContainer}
        />
      )}
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
    marginTop: 16,
    marginHorizontal: 16,
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
  noExpensesLabel: {
    textAlign: 'center',
    fontSize: 16,
    margin: 16,
  },
  contentContainer: {
    paddingVertical: 16,
  },
});

export default ExpenseSummary;
