import { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Input from '../../../components/Input';
import Expense, { ExpenseWithoutId } from '../models/Expense';

interface ExpenseFormProps {
  prevExpense?: Expense | undefined;
  onExpenseSet: (expense: ExpenseWithoutId) => void;
}

const parseDate = (date: number | undefined): Date | undefined => {
  return date && new Date(date);
};

const ExpenseForm = ({ prevExpense, onExpenseSet }: ExpenseFormProps) => {
  const [amount, setAmount] = useState(
    prevExpense?.amount.toString() || undefined,
  );
  const [date, setDate] = useState(
    parseDate(prevExpense?.date)?.toISOString() || new Date().toISOString(),
  );
  const [title, setTitle] = useState(prevExpense?.title || undefined);

  const amountRef = useRef<TextInput>(null);
  const dateRef = useRef<TextInput>(null);

  const handleAmountChange = (amount: string) => {
    setAmount(amount);
  };
  const handleDateChange = (date: string) => {
    setDate(date);
  };
  const handleTitleChange = (title: string) => {
    setTitle(title);
  };

  useEffect(() => {
    const converttedDate = Date.parse(date);
    const converttedAmount = parseFloat(amount);
    if (converttedDate && converttedAmount && title) {
      onExpenseSet({
        amount: converttedAmount,
        date: converttedDate,
        title: title,
      });
    } else {
      onExpenseSet(undefined);
    }
  }, [date, amount, title]);

  return (
    <View style={styles.container}>
      <Input
        label="Title"
        style={styles.inputContainer}
        textInputParams={{
          keyboardType: 'default',
          returnKeyType: 'next',
          enterKeyHint: 'next',
          autoFocus: true,
          onSubmitEditing: () => amountRef.current?.focus(),
          onChangeText: handleTitleChange,
          value: title,
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
            value: amount,
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
            multiline: false,
            numberOfLines: 1,
            onChangeText: handleDateChange,
            value: date,
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
    marginVertical: 16,
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
