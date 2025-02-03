import { Pressable, StyleSheet, Text, View, Platform } from 'react-native';

const PrimaryButton = ({ children }) => {
  const pressHandler = () => {
    console.log('pressed');
  };

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed && Platform.OS == 'ios'
            ? [styles.pressableContainer, styles.pressedButton]
            : styles.pressableContainer
        }
        android_ripple={{ color: 'gray' }}
        onPress={pressHandler}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 28,
    backgroundColor: 'mediumseagreen',
    overflow: 'hidden',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  pressableContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    textAlign: 'center',
  },
  pressedButton: {
    opacity: 0.5,
  },
});

export default PrimaryButton;
