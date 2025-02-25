import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentExpenses from './RecentExpenses';
import AllExpensesScreen from './AllExpensesScreen';
import RootStackParams, {
  ExpensesScreenRouteProp,
} from '../../lib/routes/types';
import { Ionicons } from '@expo/vector-icons';
import IconButton from '../../components/IconButton';

const BottomTabs = createBottomTabNavigator<RootStackParams>();

const ExpensesScreen = ({ navigation }: ExpensesScreenRouteProp) => {
  return (
    <BottomTabs.Navigator
      id={undefined}
      initialRouteName="RecentExpenses"
      screenOptions={{
        headerStyle: { backgroundColor: 'darkblue' },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: 'darkblue' },
        tabBarActiveTintColor: 'white',
        headerRight: () => (
          <IconButton
            icon="add"
            onPress={() => navigation.navigate('AddExpense')}
            color="white"
            accessibilityHint="Add new expense"
          />
        ),
      }}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent',
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
          title: 'All',
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
