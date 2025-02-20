import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import PressableCard from './PressableCard';

type IconButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  color?: string;
};

const IconButton = ({ icon, onPress, color }: IconButtonProps) => (
  <PressableCard onPress={onPress} style={styles.buttonContainer}>
    <Ionicons
      name={icon}
      size={24}
      color={color || 'black'}
      style={styles.icon}
    />
  </PressableCard>
);

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 48,
  },
  icon: {
    padding: 12,
    height: 48,
    width: 48,
  },
});

export default IconButton;
