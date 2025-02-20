import { capitalize } from '@/utils';
import { useLayoutEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import IconButton from '../../components/IconButton';
import Tag from '../../components/Tag';
import { MealDetailsScreenRouteProp } from '../../lib/routes/types';
import { meals } from './data/MealsData';
import Meal from './models/Meal';

const MealDetailsScreen = ({
  route,
  navigation,
}: MealDetailsScreenRouteProp) => {
  const meal: Meal = meals.find(meal => meal.id == route.params.id);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => setIsFavorite(prev => !prev);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <IconButton
          icon={isFavorite ? 'star' : 'star-outline'}
          onPress={handleFavorite}
          color={isFavorite ? 'gold' : 'black'}
        />
      ),
    });
  }, [navigation, meal, isFavorite]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Image
        source={{ uri: meal.imageUrl, cache: 'force-cache' }}
        style={styles.image}
      />
      <Text style={styles.title}>{meal.title}</Text>
      <View style={styles.tags}>
        <Tag>{meal.duration}m</Tag>
        <Tag>{capitalize(meal.complexity)}</Tag>
        <Tag>{capitalize(meal.affordability)}</Tag>
        <Tag>{meal.isGlutenFree ? 'Gluten Free' : 'Not Gluten Free'}</Tag>
        <Tag>{meal.isVegan ? 'Vegan' : 'Not Vegan'}</Tag>
      </View>
      <Text style={styles.subtitle}>Ingredients:</Text>
      {meal.ingredients.map(ingredient => (
        <Text key={ingredient} style={styles.description}>
          • {ingredient}
        </Text>
      ))}
      <Text style={styles.subtitle}>Steps:</Text>
      {meal.steps.map((step, index) => (
        <Text key={step} style={styles.description}>
          {index + 1}. {step}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 32,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 16,
    rowGap: 8,
    gap: 8,
    marginTop: 8,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 16,
  },
  description: {
    fontSize: 16,
    marginHorizontal: 16,
    marginTop: 8,
  },
});

export default MealDetailsScreen;
