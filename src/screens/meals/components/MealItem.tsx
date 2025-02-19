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
        <View style={styles.details}>
          <MealDetail>{`${meal.duration}m`}</MealDetail>
          <MealDetail>{capitalize(meal.complexity)}</MealDetail>
          <MealDetail>{capitalize(meal.affordability)}</MealDetail>
          {meal.isLactoseFree && <MealDetail>Lactose Free</MealDetail>}
          {meal.isVegan && <MealDetail>Vegan</MealDetail>}
          {meal.isGlutenFree && <MealDetail>Gluten Free</MealDetail>}
        </View>
      </View>
    </PressableCard>
  );
};

const MealDetail = ({ children }) => {
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.detailsLabel}>{children}</Text>
    </View>
  );
};

function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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
  details: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 8,
    rowGap: 8,
    gap: 8,
    marginTop: 8,
  },
  detailContainer: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'lightblue',
  },
  detailsLabel: {
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default MealItem;
