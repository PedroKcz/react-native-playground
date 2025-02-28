import { useExpensesStore } from '@/store';
import { StyleSheet, View } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import { AddExpenseScreenRouteProp } from '../../lib/routes/types';
import ExpenseForm from './components/ExpenseForm';
import { expenses } from './data/ExpensesData';

const AddExpenseScreen = ({ navigation }: AddExpenseScreenRouteProp) => {
  const { addExpense } = useExpensesStore();

  const handleAdd = () => {
    expenses.map(expense => addExpense(expense));
    navigation.goBack();
  };

  return (
    <View style={style.screen}>
      <ExpenseForm />
      <PrimaryButton onPress={handleAdd}>Add</PrimaryButton>
    </View>
  );
};

const style = StyleSheet.create({
  screen: {
    padding: 16,
    flex: 1,
    gap: 16,
  },
});

export default AddExpenseScreen;
