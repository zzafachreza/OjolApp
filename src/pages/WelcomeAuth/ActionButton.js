import React from 'react';
import {Text, View} from 'react-native';
import colors from '../../config/colors';
import {Button} from '../../components/atoms';

const ActionButton = ({desc, title, onPress}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.text}>{desc}</Text>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

const styles = {
  page: {marginBottom: 42, maxWidth: 225},
  text: {
    fontSize: 10,
    color: colors.medium,
    textAlign: 'center',
    paddingHorizontal: 15,
    marginBottom: 6,
  },
};

export default ActionButton;
