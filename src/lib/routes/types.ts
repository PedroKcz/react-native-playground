type RootStackParamList = {
  Home: undefined;
  Goals: undefined;
  StartGame: undefined;
  Game: { readonly userChoice: number };
  GameOver: { readonly guesses: number[] };
};

export default RootStackParamList;
