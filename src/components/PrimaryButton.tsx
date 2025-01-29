import { Pressable, StyleSheet, Text, View } from 'react-native';

const PrimaryButton = ({ children }) => {
  const pressHandler = () => {
    console.log('pressed');
  };

  return (
    <Pressable onPress={pressHandler}>
      <View style={styles.buttonContainer}>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'mediumseagreen',
    borderRadius: 28,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

export default PrimaryButton;
