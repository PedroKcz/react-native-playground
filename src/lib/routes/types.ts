import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Goals: undefined;
  StartGame: undefined;
  Game: { readonly userChoice: number };
  GameOver: { readonly guesses: number[] };
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type StartGameScreenRouteProp = NativeStackScreenProps<
  RootStackParamList,
  'StartGame'
>;

export type GameScreenRouteProp = NativeStackScreenProps<
  RootStackParamList,
  'Game'
>;

export type GameOverScreenRouteProp = NativeStackScreenProps<
  RootStackParamList,
  'GameOver'
>;

export default RootStackParamList;
