import { useExpensesStore } from '@/store';
import { useMemo } from 'react';
import { AllExpensesScreenRouteProp } from '../../lib/routes/types';
import ExpenseSummary from './components/ExpensesSummary';

const AllExpensesScreen = ({ navigation }: AllExpensesScreenRouteProp) => {
  const { expenses } = useExpensesStore();
  const sortedExpenses = useMemo(
    () => expenses.sort((a, b) => b.date - a.date),
    [expenses],
  );
  return (
    <ExpenseSummary
      expenses={sortedExpenses}
      onPress={id => navigation.navigate('EditExpense', { id: id })}
    />
  );
};

export default AllExpensesScreen;
