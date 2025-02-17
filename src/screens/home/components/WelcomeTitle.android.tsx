import { Text, StyleSheet } from 'react-native';

const WelcomeTitle = () => {
  return <Text style={styles.title}>Welcome to React Native in Android!</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
    color: 'darkgreen',
  },
});

export default WelcomeTitle;
