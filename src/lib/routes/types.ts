import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParams = {
  Home: undefined;
  Goals: undefined;
  StartGame: undefined;
  Game: { userChoice: number };
  GameOver: { guesses: number[] };
  MealsCategories: undefined;
  MealsCategory: { id: string };
  MealDetails: { id: string };
  Expenses: undefined;
  EditExpense: { id: string };
  AllExpenses: undefined;
  RecentExpenses: undefined;
  AddExpense: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParams, 'Home'>;

export type StartGameScreenRouteProp = NativeStackScreenProps<
  RootStackParams,
  'StartGame'
>;

export type GameScreenRouteProp = NativeStackScreenProps<
  RootStackParams,
  'Game'
>;

export type GameOverScreenRouteProp = NativeStackScreenProps<
  RootStackParams,
  'GameOver'
>;

export type MealsCategoriesScreenRouteProp = NativeStackScreenProps<
  RootStackParams,
  'MealsCategories'
>;

export type MealsCategoryScreenRouteProp = NativeStackScreenProps<
  RootStackParams,
  'MealsCategory'
>;

export type MealDetailsScreenRouteProp = NativeStackScreenProps<
  RootStackParams,
  'MealDetails'
>;

export type ExpensesScreenRouteProp = NativeStackScreenProps<
  RootStackParams,
  'Expenses'
>;

export type EditExpenseScreenRouteProp = NativeStackScreenProps<
  RootStackParams,
  'EditExpense'
>;

export type AllExpensesScreenRouteProp = NativeStackScreenProps<
  RootStackParams,
  'AllExpenses'
>;

export type RecentExpensesScreenRouteProp = NativeStackScreenProps<
  RootStackParams,
  'RecentExpenses'
>;

export type AddExpenseScreenRouteProp = NativeStackScreenProps<
  RootStackParams,
  'AddExpense'
>;

export default RootStackParams;
