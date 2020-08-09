import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import {SvgUri} from 'react-native-svg';
import ActionButton from './ActionButton';

export default function WelcomeAuth({navigation}) {
  const handleGoTo = (to) => {
    navigation.navigate(to);
  };

  return (
    <SafeAreaView style={styles.wrapper.page}>
      <View>
        <SvgUri
          width={250}
          height={250}
          uri="https://setiabudhi-supermarket.co.id/svg/welcome.svg"
        />
        <Text style={styles.text.welcome}>Welcome auth</Text>
        <ActionButton
          desc="Silahkan Masuk, jika sudah memiliki Akun"
          title="Masuk"
          onPress={() => {
            handleGoTo('Login');
          }}
        />
        <ActionButton
          desc="Silahkan daftar terlebih dahulu, sebelum login"
          title="daftar"
          onPress={() => {
            handleGoTo('Register');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = {
  wrapper: {
    page: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    ilustration: {
      width: 219,
      height: 117,
      backgroundColor: '#00B0FF',
      marginBottom: 10,
    },
  },
  text: {
    welcome: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#00B0FF',
      marginBottom: 70,
    },
  },
};
