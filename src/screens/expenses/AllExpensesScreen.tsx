import { useExpensesStore } from '@/store';
import { AllExpensesScreenRouteProp } from '../../lib/routes/types';
import ExpenseSummary from './components/ExpensesSummary';

const AllExpensesScreen = ({ navigation }: AllExpensesScreenRouteProp) => {
  const { expenses } = useExpensesStore();
  return (
    <ExpenseSummary
      expenses={expenses}
      onPress={id => navigation.navigate('EditExpense', { id: id })}
    />
  );
};

export default AllExpensesScreen;
