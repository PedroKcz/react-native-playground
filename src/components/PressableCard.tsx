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
  accessibilityHint?: string | undefined;
}

const PressableCard = ({
  onPress,
  children,
  style,
  accessibilityHint,
}: PressableCardProps) => {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed && Platform.OS == 'ios'
          ? [styles.pressableContainer, styles.pressedButton, style]
          : [styles.pressableContainer, style]
      }
      android_ripple={{ color: 'rgba(117, 116, 115, 0.45)', foreground: true }}
      onPressIn={onPress}
      accessibilityHint={accessibilityHint}
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
