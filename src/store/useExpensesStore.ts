import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import Expense from '../screens/expenses/models/Expense';

interface ExpensesStore {
  expenses: Expense[];
  addExpense: (expense: Omit<Expense, 'id'>) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, expense: Partial<Omit<Expense, 'id'>>) => void;
  getExpense: (id: string) => Expense | undefined;
}

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
          expenses: [
            ...get().expenses.map(prev =>
              prev.id === id ? { ...prev, ...expense } : prev,
            ),
          ],
        });
      },
      getExpense: (id: string) => {
        return get().expenses.find(expense => expense.id === id);
      },
    }),
    {
      name: 'expenses-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
