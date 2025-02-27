import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useLayoutEffect } from 'react';
import IconButton from '../../components/IconButton';
import RootStackParams, {
  ExpensesScreenRouteProp,
} from '../../lib/routes/types';
import AllExpensesScreen from './AllExpensesScreen';
import RecentExpenses from './RecentExpenses';

const BottomTabs = createBottomTabNavigator<RootStackParams>();

const ExpensesScreen = ({ navigation }: ExpensesScreenRouteProp) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="add"
          onPress={() => navigation.navigate('AddExpense')}
          color="black"
          accessibilityHint="Add new expense"
        />
      ),
    });
  }, [navigation]);

  return (
    <BottomTabs.Navigator
      id={undefined}
      initialRouteName="RecentExpenses"
      screenOptions={{
        tabBarStyle: { backgroundColor: 'darkblue' },
        tabBarActiveTintColor: 'white',
        headerShown: false,
      }}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpensesScreen}
        options={{
          tabBarLabel: 'All',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default ExpensesScreen;
