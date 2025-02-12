import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GoalScreen from './screens/goal/GoalScreen';
import HomeScreen from './screens/home/HomeScreen';
import StartGameScreen from './screens/game/StartGameScreen';
import GameScreen from './screens/game/GameScreen';

const Stack = createNativeStackNavigator();

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
            name="GameScreen"
            component={GameScreen}
            options={{ title: 'Game' }}
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
