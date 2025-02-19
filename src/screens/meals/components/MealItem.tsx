import { Text, Image, View, StyleSheet } from 'react-native';
import Meal from '../models/Meal';
import PressableCard from '../../../components/PressableCard';

interface MealItemProps {
  meal: Meal;
  onPress: () => void;
}

const MealItem = ({ meal, onPress }: MealItemProps) => {
  return (
    <PressableCard onPress={() => onPress()} style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={{ uri: meal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{meal.title}</Text>
      </View>
    </PressableCard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: 'white',
    overflow: 'hidden',
    elevation: 4,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  innerContainer: {
    paddingBottom: 8,
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 16,
    marginTop: 8,
    marginHorizontal: 8,
    fontWeight: 'bold',
  },
});

export default MealItem;
