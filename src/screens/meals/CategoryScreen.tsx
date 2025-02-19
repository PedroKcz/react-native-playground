import { FlatList, StyleSheet, Text, View } from 'react-native';
import PressableCard from '../../components/PressableCard';
import { MealsCategoryScreenRouteProp } from '../../lib/routes/types';
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
    <View style={styles.screen}>
      <Text>{category.title}</Text>
      <FlatList
        style={styles.mealsContainer}
        data={mealsInCategory}
        renderItem={({ item }) => (
          <PressableCard
            onPress={() =>
              navigation.navigate('MealDetails', {
                id: item.id,
                name: item.title,
              })
            }
          >
            <Text>{item.title}</Text>
          </PressableCard>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  mealsContainer: {
    flex: 1,
  },
});

export default CategoryScreen;
