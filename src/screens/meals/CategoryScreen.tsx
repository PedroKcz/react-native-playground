import { FlatList, StyleSheet } from 'react-native';
import { MealsCategoryScreenRouteProp } from '../../lib/routes/types';
import MealItem from './components/MealItem';
import { categories, meals } from './data/MealsData';
import Category from './models/Category';
import Meal from './models/Meal';

const CategoryScreen = ({
  route,
  navigation,
}: MealsCategoryScreenRouteProp) => {
  const category: Category = categories.find(c => c.id == route.params.id);
  const mealsInCategory: Meal[] = meals.filter(meal =>
    meal.categoryIds.includes(category.id),
  );

  return (
    <FlatList
      style={styles.mealsContainer}
      data={mealsInCategory}
      renderItem={({ item }) => (
        <MealItem
          meal={item}
          onPress={() => {
            navigation.navigate('MealDetails', {
              id: item.id,
              name: item.title,
            });
          }}
        />
      )}
      contentContainerStyle={{ padding: 16, gap: 16 }}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  mealsContainer: {
    flex: 1,
  },
});

export default CategoryScreen;
