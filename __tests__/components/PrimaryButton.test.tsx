import { expect, jest, test } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react-native';
import PrimaryButton from '../../src/components/PrimaryButton';

test('calls onPress when button is pressed', () => {
  const onPressMock = jest.fn();
  const { getByText } = render(
    <PrimaryButton onPress={onPressMock}>Button</PrimaryButton>,
  );
  const button = getByText('Button');
  expect(button).toBeTruthy();
  fireEvent.press(button);
  expect(onPressMock).toHaveBeenCalledTimes(1);
});
