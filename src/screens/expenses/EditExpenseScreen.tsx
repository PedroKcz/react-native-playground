import { useExpensesStore } from '@/store';
import { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import { EditExpenseScreenRouteProp } from '../../lib/routes/types';
import ExpenseForm from './components/ExpenseForm';
import { ExpenseWithoutId } from './models/Expense';

const EditExpenseScreen = ({
  route,
  navigation,
}: EditExpenseScreenRouteProp) => {
  const { deleteExpense, updateExpense, getExpense } = useExpensesStore();

  const id = route.params?.id;
  const prevExpense = useMemo(() => getExpense(id), [id]);

  const [expense, setExpense] = useState<ExpenseWithoutId | undefined>(
    prevExpense,
  );

  const handleDelete = () => {
    deleteExpense(id);
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleUpdate = () => {
    updateExpense(id, expense);
    navigation.goBack();
  };

  const handleExpenseSet = (expense: ExpenseWithoutId) => {
    setExpense(expense);
  };

  if (id) {
    return (
      <View style={style.screen}>
        <ExpenseForm
          prevExpense={prevExpense}
          onExpenseSet={handleExpenseSet}
        />
        <View style={style.buttonsContainer}>
          <PrimaryButton onPress={handleCancel} style={style.button}>
            Cancel
          </PrimaryButton>
          <PrimaryButton onPress={handleDelete} style={style.deleteButton}>
            Delete
          </PrimaryButton>
          <PrimaryButton
            onPress={handleUpdate}
            style={style.button}
            isEnabled={expense !== undefined}
          >
            Update
          </PrimaryButton>
        </View>
      </View>
    );
  } else {
    navigation.goBack();
  }
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  buttonsContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  deleteButton: {
    backgroundColor: 'red',
    alignSelf: 'flex-end',
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default EditExpenseScreen;
