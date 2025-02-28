import { useExpensesStore } from '@/store';
import { RecentExpensesScreenRouteProp } from '../../lib/routes/types';
import ExpenseSummary from './components/ExpensesSummary';

const RecentExpenses = ({ navigation }: RecentExpensesScreenRouteProp) => {
  const { expenses } = useExpensesStore();
  const today = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 7);

  return (
    <ExpenseSummary
      expenses={expenses.filter(
        expense => expense.date >= sevenDaysAgo.getTime(),
      )}
      period="Last 7 days"
      onPress={id => navigation.navigate('EditExpense', { id: id })}
    />
  );
};

export default RecentExpenses;
