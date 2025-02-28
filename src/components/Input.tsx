import { RefAttributes } from 'react';
import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

const Input = ({
  label,
  style,
  textInputParams,
}: {
  label: string;
  style?: StyleProp<ViewStyle> | undefined;
  textInputParams?: (TextInputProps & RefAttributes<TextInput>) | undefined;
}) => {
  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...textInputParams}
        style={[styles.input, textInputParams.style]}
      />
    </View>
  );
};

const styles = {
  label: {
    fontSize: 12,
    color: 'black',
  },
  input: {
    color: 'black',
    paddingVertical: 8,
    marginTop: 4,
    borderRadius: 6,
    fontSize: 12,
    borderWidth: 1,
    borderColor: 'lightblue',
  },
};

export default Input;
