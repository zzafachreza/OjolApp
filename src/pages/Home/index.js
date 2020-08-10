import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import colors from '../../config/colors';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
export default function Home({navigation}) {
  const {form} = useSelector((state) => state.reducerLogin);

  const [username, setusername] = useState(null);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        // value previously stored
        setusername(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <SvgUri
        width={250}
        height={250}
        uri="https://setiabudhi-supermarket.co.id/svg/welcome.svg"
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
        }}>
        SELAMAT DATANG {username}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
