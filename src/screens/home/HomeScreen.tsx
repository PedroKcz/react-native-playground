import { Button, StyleSheet, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.homeContainer}>
      <Button title="Goals" onPress={() => navigation.navigate('Goals')} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});

export default HomeScreen;
