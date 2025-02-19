import { Text, View } from 'react-native';
import { MealDetailsScreenRouteProp } from '../../lib/routes/types';
import { meals } from './data/MealsData';
import Meal from './models/Meal';

const MealDetailsScreen = ({ route }: MealDetailsScreenRouteProp) => {
  const meal: Meal = meals.find(meal => meal.id == route.params.id);
  return (
    <View>
      <Text>{meal.title}</Text>
    </View>
  );
};

export default MealDetailsScreen;
