interface Expense {
  id: string;
  title: string;
  amount: number;
  date: number;
}

export type ExpenseWithoutId = Omit<Expense, 'id'>;

export default Expense;
