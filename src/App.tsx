import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GoalScreen from './screens/goal/GoalScreen';
import HomeScreen from './screens/home/HomeScreen';
import StartGameScreen from './screens/game/StartGameScreen';
import GameScreen from './screens/game/GameScreen';
import GameOverScreen from './screens/game/GameOverScreen';
import RootStackParams from './lib/routes/types';

const Stack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <NavigationContainer>
        <Stack.Navigator id={undefined}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Home' }}
          />
          <Stack.Screen
            name="Goals"
            component={GoalScreen}
            options={{ title: 'Goals' }}
          />
          <Stack.Screen
            name="StartGame"
            component={StartGameScreen}
            options={{ title: 'Start Game' }}
          />
          <Stack.Screen
            name="Game"
            component={GameScreen}
            options={{ title: 'Game' }}
          />
          <Stack.Screen
            name="GameOver"
            component={GameOverScreen}
            options={{ title: 'Game Over', headerBackVisible: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
