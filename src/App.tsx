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
import CategoriesScreen from './screens/meals/CategoriesScreen';
import CategoryScreen from './screens/meals/CategoryScreen';
import MealDetailsScreen from './screens/meals/MealDetailsScreen';

const Stack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <NavigationContainer>
        <Stack.Navigator id={undefined} initialRouteName="Home">
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
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{ title: 'Categories' }}
          />
          <Stack.Screen
            name="MealsCategory"
            component={CategoryScreen}
            options={({ route }) => ({
              title: route.params.name,
            })}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
            options={({ route }) => ({
              title: route.params.name,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
