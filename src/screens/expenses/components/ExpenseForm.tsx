import { useRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Input from '../../../components/Input';

const ExpenseForm = () => {
  const amountRef = useRef<TextInput>(null);
  const dateRef = useRef<TextInput>(null);
  const handleAmountChange = (_amount: string) => {};
  const handleDateChange = (_date: string) => {};
  const handleTitleChange = (_title: string) => {};

  return (
    <View style={styles.container}>
      <Input
        label="Title"
        style={styles.inputContainer}
        textInputParams={{
          keyboardType: 'default',
          returnKeyType: 'next',
          enterKeyHint: 'next',
          onSubmitEditing: () => amountRef.current?.focus(),
          onChangeText: handleTitleChange,
        }}
      />

      <View style={styles.amountAndDateContainer}>
        <Input
          label="Amount"
          style={[styles.inputContainer, { flex: 1 }]}
          textInputParams={{
            keyboardType: 'decimal-pad',
            returnKeyType: 'next',
            enterKeyHint: 'next',
            ref: amountRef,
            onSubmitEditing: () => dateRef.current?.focus(),
            onChangeText: handleAmountChange,
          }}
        />

        <Input
          label="Date"
          style={[styles.inputContainer, { flex: 1 }]}
          textInputParams={{
            keyboardType: 'default',
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            returnKeyType: 'done',
            ref: dateRef,
            onChangeText: handleDateChange,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
  inputContainer: {
    marginHorizontal: 16,
    alignSelf: 'stretch',
  },

  amountAndDateContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    gap: 16,
  },
});

export default ExpenseForm;
