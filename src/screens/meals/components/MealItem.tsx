import { capitalize } from '@/utils';
import { Image, StyleSheet, Text, View } from 'react-native';
import PressableCard from '../../../components/PressableCard';
import Tag from '../../../components/Tag';
import Meal from '../models/Meal';

interface MealItemProps {
  meal: Meal;
  onPress: () => void;
}

const MealItem = ({ meal, onPress }: MealItemProps) => {
  return (
    <PressableCard onPress={() => onPress()} style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={{ uri: meal.imageUrl, cache: 'force-cache' }}
          style={styles.image}
        />
        <Text style={styles.title}>{meal.title}</Text>
        <View style={styles.details}>
          <Tag>{`${meal.duration}m`}</Tag>
          <Tag>{capitalize(meal.complexity)}</Tag>
          <Tag>{capitalize(meal.affordability)}</Tag>
          {meal.isLactoseFree && <Tag>Lactose Free</Tag>}
          {meal.isVegan && <Tag>Vegan</Tag>}
          {meal.isGlutenFree && <Tag>Gluten Free</Tag>}
        </View>
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
  details: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 8,
    rowGap: 8,
    gap: 8,
    marginTop: 8,
  },
});

export default MealItem;
