import {
  beforeAll,
  beforeEach,
  describe,
  expect,
  jest,
  test,
} from '@jest/globals';
import { fireEvent, render, RenderAPI } from '@testing-library/react-native';
import App from '../../../src/App';
import IconButton from '../../../src/components/IconButton';

describe('MealsDetailsScreen', () => {
  let screen: RenderAPI;

  beforeEach(() => {
    screen = render(<App />);
    fireEvent.press(screen.getByText('Meals'));
    fireEvent.press(screen.getByText('Italian'));
    fireEvent.press(screen.getByText('Italian Veggie Pasta'));
  });

  test('renders correctly', () => {
    expect(screen.getByText('Italian Veggie Pasta')).toBeTruthy();
  });
});
