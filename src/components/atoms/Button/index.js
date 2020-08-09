import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../../../config/colors';
export default function Button({desc, title, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: colors.primary,
        borderRadius: 25,
        paddingVertical: 12,
      }}>
      <Text
        style={{
          fontSize: 12,
          color: colors.white,
          fontWeight: 'bold',
          textTransform: 'uppercase',
          textAlign: 'center',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
