import { View, Text } from 'react-native';
import { MealsCategoryScreenRouteProp } from '../../lib/routes/types';

const CategoryScreen = ({ route }: MealsCategoryScreenRouteProp) => {
  return (
    <View>
      <Text>{route.params.category.title}</Text>
    </View>
  );
};

export default CategoryScreen;
