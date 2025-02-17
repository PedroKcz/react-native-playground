import { Text, StyleSheet } from 'react-native';

const WelcomeTitle = () => {
  return <Text style={styles.title}>Welcome to React Native in iOS!</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
    color: 'darkgray',
  },
});

export default WelcomeTitle;
