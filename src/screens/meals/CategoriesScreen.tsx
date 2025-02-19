import { View, StyleSheet, FlatList, Text } from 'react-native';
import { categories } from './data/MealsData';
import { MealsCategoriesScreenRouteProp } from '../../lib/routes/types';
import CategoryItem from './components/CategoryItem';

const CategoriesScreen = ({ navigation }: MealsCategoriesScreenRouteProp) => {
  return (
    <FlatList
      style={styles.container}
      data={categories}
      renderItem={({ item }) => (
        <CategoryItem
          category={item}
          onPress={() => {
            navigation.navigate('MealsCategory', { category: item });
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
