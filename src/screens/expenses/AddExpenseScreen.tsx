import { useExpensesStore } from '@/store';
import { StyleSheet, View } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import { expenses } from './data/ExpensesData';
import { AddExpenseScreenRouteProp } from '../../lib/routes/types';

const AddExpenseScreen = ({ navigation }: AddExpenseScreenRouteProp) => {
  const { addExpense } = useExpensesStore();

  const handleAdd = () => {
    expenses.map(expense => addExpense(expense));
    navigation.goBack();
  };

  return (
    <View style={style.screen}>
      <PrimaryButton onPress={handleAdd}>Add</PrimaryButton>
    </View>
  );
};

const style = StyleSheet.create({
  screen: {
    padding: 16,
    flex: 1,
  },
});

export default AddExpenseScreen;
