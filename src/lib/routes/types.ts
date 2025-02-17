import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParams = {
  Home: undefined;
  Goals: undefined;
  StartGame: undefined;
  Game: { readonly userChoice: number };
  GameOver: { readonly guesses: number[] };
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

export default RootStackParams;
