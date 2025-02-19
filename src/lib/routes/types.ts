import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Category from '../../screens/meals/models/Category';

type RootStackParams = {
  Home: undefined;
  Goals: undefined;
  StartGame: undefined;
  Game: { readonly userChoice: number };
  GameOver: { readonly guesses: number[] };
  MealsCategories: undefined;
  MealsCategory: { category: Category };
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

export default RootStackParams;
