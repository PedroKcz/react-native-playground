import { Button, useWindowDimensions, StyleSheet, View } from 'react-native';
import { HomeScreenProps } from '../../lib/routes/types';
import WelcomeTitle from './components/WelcomeTitle';

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { width, height } = useWindowDimensions();
  const flexDirection = height > width ? 'column' : 'row';
  return (
    <View style={[styles.homeContainer, { flexDirection: flexDirection }]}>
      <WelcomeTitle />
      <View style={styles.buttonContainer}>
        <Button title="Goals" onPress={() => navigation.navigate('Goals')} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Game" onPress={() => navigation.navigate('StartGame')} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Meals" onPress={() => navigation.navigate('MealsCategories')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    justifyContent: 'center',
  },
  buttonContainer: {
    padding: 8,
  },
});

export default HomeScreen;
