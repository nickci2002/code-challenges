import * as SecureStore from 'expo-secure-store';

// Getter
export const getStorageItem = async (key: string) => {
  return await SecureStore.getItemAsync(key);
};

// Setter
export const setStorageItem = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, JSON.stringify(value));
};
