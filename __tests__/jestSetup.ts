import { jest } from '@jest/globals';
import { View } from 'react-native';

jest.mock('expo-font', () => ({
  loadAsync: jest.fn(),
  isLoaded: jest.fn().mockReturnValue(true),
}));

export {};
