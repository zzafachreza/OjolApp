import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {setForm} from '../redux';

const _storeData = async (key, value) => {
  const {form} = useSelector((state) => state.reducerUser);

  const dispatch = useDispatch();

  try {
    await AsyncStorage.setItem(key, value);
    dispatch(setForm(key, value));
  } catch (error) {
    // Error saving data
    console.log(error);
  }
};

export default _storeData;
