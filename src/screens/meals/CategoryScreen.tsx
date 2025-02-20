import { useLayoutEffect } from 'react';
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

  useLayoutEffect(() => {
    navigation.setOptions({ title: category.title });
  }, [navigation, category]);

  return (
    <FlatList
      style={styles.mealsContainer}
      data={mealsInCategory}
      renderItem={({ item }) => (
        <MealItem
          meal={item}
          onPress={() => {
            navigation.navigate('MealDetails', { id: item.id });
          }}
        />
      )}
      contentContainerStyle={styles.contentContainer}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  mealsContainer: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 16,
    paddingBottom: 32,
    gap: 16,
    paddingHorizontal: 16,
  },
});

export default CategoryScreen;
