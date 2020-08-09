import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Platform,
} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../config/colors';

import {Button} from '../../components/atoms';

export default function Register({navigation}) {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          // backgroundColor: 'red',
          paddingHorizontal: 10,
          paddingTop: 10,
        }}>
        <SvgUri
          width={50}
          height={30}
          uri="https://setiabudhi-supermarket.co.id/svg/left-arrow.svg"
        />
      </TouchableOpacity>
      <View
        style={{alignItems: 'center', justifyContent: 'center', padding: 10}}>
        <SvgUri
          width={200}
          height={200}
          uri="https://setiabudhi-supermarket.co.id/svg/register.svg"
        />
      </View>
      <View
        style={{
          paddingHorizontal: 20,
        }}>
        <View style={styles.container}>
          <TextInput
            autoCapitalize="none"
            placeholder="username"
            placeholderTextColor={colors.medium}
            style={{
              width: '100%',
            }}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            autoCapitalize="none"
            placeholder="email"
            placeholderTextColor={colors.medium}
            style={{
              width: '100%',
            }}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            autoCapitalize="none"
            placeholder="password"
            secureTextEntry={true}
            placeholderTextColor={colors.medium}
            style={{
              width: '100%',
            }}
          />
        </View>
        <Button title="Daftar" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 15,
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'android' ? 5 : 15,
    marginVertical: 15,
  },
});
