type RootStackParamList = {
  Home: undefined;
  Goals: undefined;
  StartGame: undefined;
  Game: { userChoice: number };
  GameOver: { guesses: number };
};

export default RootStackParamList;
