import React from 'react';
import {
  Platform,
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

interface PressableCardProps {
  onPress: () => void;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
}

const PressableCard = ({ onPress, children, style }: PressableCardProps) => {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed && Platform.OS == 'ios'
          ? [styles.pressableContainer, styles.pressedButton, style]
          : [styles.pressableContainer, style]
      }
      android_ripple={{ color: 'rgba(255, 255, 255, 0.5)', foreground: true }}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressableContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  pressedButton: {
    opacity: 0.5,
  },
});

export default PressableCard;
