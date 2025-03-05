import { useExpensesStore } from '@/store';
import { useMemo } from 'react';
import { RecentExpensesScreenRouteProp } from '../../lib/routes/types';
import ExpenseSummary from './components/ExpensesSummary';

const RecentExpenses = ({ navigation }: RecentExpensesScreenRouteProp) => {
  const { expenses } = useExpensesStore();
  const today = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 7);
  const filteredExpenses = useMemo(
    () =>
      expenses
        .filter(expense => expense.date >= sevenDaysAgo.getTime())
        .sort((a, b) => b.date - a.date),
    [expenses],
  );

  return (
    <ExpenseSummary
      expenses={filteredExpenses}
      period="Last 7 days"
      onPress={id => navigation.navigate('EditExpense', { id: id })}
    />
  );
};

export default RecentExpenses;
