import Expense from '../models/Expense';

export const expenses: Expense[] = [
  {
    id: '1',
    title: 'Groceries',
    amount: 100,
    date: new Date('2025-02-26'),
  },
  {
    id: '2',
    title: 'Gas',
    amount: 50,
    date: new Date('2025-02-26'),
  },
  {
    id: '3',
    title: 'Rent',
    amount: 1000,
    date: new Date('2025-02-25'),
  },
  {
    id: '4',
    title: 'Insurance',
    amount: 100,
    date: new Date('2025-02-15'),
  },
  {
    id: '5',
    title: 'Utilities',
    amount: 200,
    date: new Date('2025-02-02'),
  },
  {
    id: '6',
    title: 'Car Payment',
    amount: 300,
    date: new Date('2025-02-01'),
  },
];
