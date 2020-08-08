import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeAuth');
    }, 2000);
  });
  return (
    <View>
      <Text>Spalsh Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
