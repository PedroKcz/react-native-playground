import { jest } from '@jest/globals';

jest.mock('expo-font', () => ({
  loadAsync: jest.fn(),
  isLoaded: jest.fn().mockReturnValue(true),
}));

jest.mock(
  '@react-native-async-storage/async-storage',
  () => '@react-native-async-storage/async-storage/jest/async-storage-mock',
);

export {};
