import { useExpensesStore } from '@/store';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import { AddExpenseScreenRouteProp } from '../../lib/routes/types';
import ExpenseForm from './components/ExpenseForm';
import Expense from './models/Expense';

const AddExpenseScreen = ({ navigation }: AddExpenseScreenRouteProp) => {
  const { addExpense } = useExpensesStore();
  const [expense, setExpense] = useState<Expense | undefined>(undefined);

  const handleAdd = () => {
    addExpense(expense);
    navigation.goBack();
  };

  const handleExpenseSet = (expense: Expense | undefined) => {
    setExpense(expense);
  };

  return (
    <View style={style.screen}>
      <ExpenseForm onExpenseSet={handleExpenseSet} />
      <PrimaryButton onPress={handleAdd} isEnabled={expense !== undefined}>
        Add
      </PrimaryButton>
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
