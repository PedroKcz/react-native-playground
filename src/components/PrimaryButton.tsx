import { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import PressableCard from './PressableCard';

const PrimaryButton = ({
  children,
  onPress,
  style,
}: {
  children: ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle> | undefined;
}) => {
  return (
    <View style={[styles.buttonContainer, style]}>
      <PressableCard onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
      </PressableCard>
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
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});

export default PrimaryButton;
