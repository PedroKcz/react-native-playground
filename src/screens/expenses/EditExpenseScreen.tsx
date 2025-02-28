import { useExpensesStore } from '@/store';
import { StyleSheet, View } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import { EditExpenseScreenRouteProp } from '../../lib/routes/types';

const EditExpenseScreen = ({
  route,
  navigation,
}: EditExpenseScreenRouteProp) => {
  const id = route.params?.id;
  const { deleteExpense } = useExpensesStore();

  const handleDelete = () => {
    deleteExpense(id);
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleUpdate = () => {
    navigation.goBack();
  };

  if (id) {
    return (
      <View style={style.screen}>
        <View style={style.buttonsContainer}>
          <PrimaryButton onPress={handleCancel} style={style.button}>
            Cancel
          </PrimaryButton>
          <PrimaryButton onPress={handleUpdate} style={style.button}>
            Update
          </PrimaryButton>
        </View>

        <View>
          <PrimaryButton onPress={handleDelete} style={style.deleteButton}>
            Delete
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
