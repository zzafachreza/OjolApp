import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import colors from '../../../config/colors';

export default function Input({placeholder}) {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flexDirection: 'row',
    borderRadius: 25,
    width: '100%',
    padding: 15,
    marginVertical: 15,
  },
});
