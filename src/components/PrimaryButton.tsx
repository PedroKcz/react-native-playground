import { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import PressableCard from './PressableCard';

const PrimaryButton = ({
  children,
  onPress,
  style,
  isEnabled,
}: {
  children: ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle> | undefined;
  isEnabled?: boolean | undefined;
}) => {
  const enabled = isEnabled ?? true;
  return (
    <View style={[styles.buttonContainer, style, !enabled && styles.disabled]}>
      <PressableCard onPress={onPress} disabled={!enabled}>
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
  disabled: {
    backgroundColor: 'lightgray',
    opacity: 0.5,
    elevation: 0,
    shadowOpacity: 0,
  },
});

export default PrimaryButton;
