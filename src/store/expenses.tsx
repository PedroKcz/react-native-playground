import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import Expense from '../screens/expenses/models/Expense';

type ExpensesStore = {
  expenses: Expense[];
  addExpense: (_expense: Omit<Expense, 'id'>) => void;
  deleteExpense: (_id: string) => void;
  updateExpense: (_id: string, _expense: Partial<Omit<Expense, 'id'>>) => void;
};

export const useExpensesStore = create<ExpensesStore>()(
  persist(
    (set, get) => ({
      expenses: get()?.expenses || [],
      addExpense: (expense: Omit<Expense, 'id'>) => {
        set({
          expenses: [...(get()?.expenses || []), { ...expense, id: uuid.v4() }],
        });
      },
      deleteExpense: (id: string) => {
        set({
          expenses: [...get().expenses.filter(expense => expense.id !== id)],
        });
      },
      updateExpense: (id: string, expense: Partial<Omit<Expense, 'id'>>) => {
        set({
          expenses: get().expenses.map(prev =>
            prev.id === id ? { ...expense, ...prev } : prev,
          ),
        });
      },
    }),
    {
      name: 'expenses-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
