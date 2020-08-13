import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import colors from '../../config/colors';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { _storeData, getData } from '../../api/storage';

export default function Splash({ navigation }) {
	const { form } = useSelector((state) => state.reducerLogin);
	const [ username, setusername ] = useState(null);

	const dispatch = useDispatch();
	// console.log(form);

	const getData = async () => {
		try {
			const value = await AsyncStorage.getItem('username');
			if (value !== null) {
				// value previously stored
				alert(value);
				setTimeout(() => {
					navigation.replace('Home');
				}, 2000);
			} else {
				alert(value);
				setTimeout(() => {
					navigation.replace('WelcomeAuth');
				}, 2000);
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
				justifyContent: 'center'
			}}
		>
			<SvgUri width={250} height={250} uri="https://setiabudhi-supermarket.co.id/svg/welcome.svg" />
			<Text
				style={{
					fontSize: 24,
					fontWeight: 'bold'
				}}
			>
				Ojek Online {username}
			</Text>
			<Text
				style={{
					fontSize: 12,
					fontWeight: 'bold',
					marginTop: 20,
					color: colors.primary
				}}
			>
				mudah, murah dan cepat
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
