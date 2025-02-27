import { View, StyleSheet } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';

const AddExpenseScreen = () => {
  return (
    <View style={style.screen}>
      <PrimaryButton onPress={() => {}}>Add</PrimaryButton>
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
