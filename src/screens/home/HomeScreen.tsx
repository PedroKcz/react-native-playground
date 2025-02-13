import { Button, StyleSheet, View } from 'react-native';
import RootStackParamList from '../../lib/routes/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.buttonContainer}>
        <Button title="Goals" onPress={() => navigation.navigate('Goals')} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Game" onPress={() => navigation.navigate('StartGame')} />
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
