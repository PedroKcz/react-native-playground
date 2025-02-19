import { StyleSheet, Text, View } from 'react-native';
import PressableCard from '../../../components/PressableCard';
import Category from '../models/Category';

interface CategoryItemProps {
  category: Category;
  onPress: () => void;
}

const CategoryItem = ({ category, onPress }: CategoryItemProps) => {
  return (
    <View style={[styles.container, { backgroundColor: category.color }]}>
      <PressableCard onPress={onPress} style={styles.pressable}>
        <View style={styles.innerContainer}>
          <Text style={styles.label}>{category.title}</Text>
        </View>
      </PressableCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    borderRadius: 16,
    elevation: 4,
    shadowColor: 'black',
    overflow: 'hidden',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  pressable: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CategoryItem;
