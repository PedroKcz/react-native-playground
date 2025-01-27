import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GoalScreen from './screens/goal/GoalScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <GoalScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
