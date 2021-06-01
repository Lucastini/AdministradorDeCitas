import AsyncStorage from '@react-native-async-storage/async-storage';
//https://react-native-async-storage.github.io/async-storage/docs/usage/


export const storeData = async (storeKey, objectValue) => {
    try {
      const jsonValue = JSON.stringify(objectValue);
      await AsyncStorage.setItem(storeKey, jsonValue);
    } catch (e) {
      console.log('error', e);
    }
  };
  export const getData = async storeKey => {
    try {
      const jsonValue = await AsyncStorage.getItem(storeKey);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log('error', e);
    }
  };