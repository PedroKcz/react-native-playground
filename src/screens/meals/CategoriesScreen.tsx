import { FlatList, StyleSheet, View } from 'react-native';
import { MealsCategoriesScreenRouteProp } from '../../lib/routes/types';
import CategoryItem from './components/CategoryItem';
import { categories } from './data/MealsData';

const CategoriesScreen = ({ navigation }: MealsCategoriesScreenRouteProp) => {
  return (
    <FlatList
      style={styles.container}
      data={categories}
      renderItem={({ item }) => (
        <CategoryItem
          category={item}
          onPress={() => {
            navigation.navigate('MealsCategory', {
              id: item.id,
              name: item.title,
            });
          }}
        />
      )}
      keyExtractor={item => item.id}
      numColumns={2}
      contentContainerStyle={styles.contentContainer}
      columnWrapperStyle={styles.columnWrapper}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  columnWrapper: {
    gap: 16,
  },
  itemSeparator: {
    height: 16,
  },
});

export default CategoriesScreen;
