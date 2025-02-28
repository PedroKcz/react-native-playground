import { Ionicons } from '@expo/vector-icons';
import { Platform, Pressable, StyleSheet } from 'react-native';

type IconButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  color?: string;
  accessibilityHint?: string;
};

const IconButton = ({
  icon,
  onPress,
  color,
  accessibilityHint,
}: IconButtonProps) => (
  <Pressable
    style={({ pressed }) =>
      pressed && Platform.OS == 'ios'
        ? [
            styles.pressableContainer,
            styles.pressedButton,
            styles.buttonContainer,
          ]
        : [styles.pressableContainer, styles.buttonContainer]
    }
    android_ripple={{ color: 'rgba(117, 116, 115, 0.45)', foreground: true }}
    onPressIn={onPress}
    accessibilityHint={accessibilityHint}
  >
    <Ionicons
      name={icon}
      size={24}
      color={color || 'black'}
      style={styles.icon}
    />
  </Pressable>
);

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 48,
    overflow: 'hidden',
  },
  icon: {
    padding: 12,
    height: 48,
    width: 48,
  },
  pressableContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  pressedButton: {
    opacity: 0.5,
  },
});

export default IconButton;
