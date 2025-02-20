import { View, Text, StyleSheet } from 'react-native';

const Tag = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'lightblue',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default Tag;
