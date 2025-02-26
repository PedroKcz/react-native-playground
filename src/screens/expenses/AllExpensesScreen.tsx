import { AllExpensesScreenRouteProp } from '../../lib/routes/types';
import ExpenseSummary from './components/ExpensesSummary';
import { expenses } from './data/ExpensesData';

const AllExpensesScreen = ({ navigation }: AllExpensesScreenRouteProp) => {
  return (
    <ExpenseSummary
      expenses={expenses}
      onPress={id => navigation.navigate('EditExpense', { id: id })}
    />
  );
};

export default AllExpensesScreen;
