import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParams = {
  Home: undefined;
  Goals: undefined;
  StartGame: undefined;
  Game: { userChoice: number };
  GameOver: { guesses: number[] };
  MealsCategories: undefined;
  MealsCategory: { name: string; id: string };
  MealDetails: { name: string; id: string };
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

export default RootStackParams;
