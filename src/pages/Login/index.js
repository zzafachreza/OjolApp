import React from 'react';
import { Platform, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components/atoms';
import colors from '../../config/colors';
import { setForm } from '../../redux';
export default function Login({ navigation }) {
	const { form } = useSelector((state) => state.reducerLogin);
	const dispatch = useDispatch();

	const onInputChange = (value, inputType) => {
		dispatch(setForm(inputType, value));
	};

	const sendData = () => {
		console.log(form);
	};

	return (
		<SafeAreaView>
			<TouchableOpacity
				onPress={() => {
					navigation.goBack();
				}}
				style={{
					// backgroundColor: 'red',
					paddingHorizontal: 10,
					paddingTop: 10
				}}
			>
				<SvgUri width={50} height={30} uri="https://setiabudhi-supermarket.co.id/svg/left-arrow.svg" />
			</TouchableOpacity>
			<View style={{ alignItems: 'center', justifyContent: 'center', padding: 10 }}>
				<SvgUri width={200} height={200} uri="https://setiabudhi-supermarket.co.id/svg/login.svg" />
			</View>

			<View
				style={{
					paddingHorizontal: 20
				}}
			>
				<View style={styles.container}>
					<TextInput
						autoCapitalize="none"
						placeholder="username"
						onChangeText={(value) => onInputChange(value, 'username')}
						placeholderTextColor={colors.medium}
						style={{
							width: '100%'
						}}
					/>
				</View>
				<View style={styles.container}>
					<TextInput
						autoCapitalize="none"
						placeholder="password"
						onChangeText={(value) => onInputChange(value, 'password')}
						secureTextEntry={true}
						placeholderTextColor={colors.medium}
						style={{
							width: '100%'
						}}
					/>
				</View>
				<Button title="Login" onPress={sendData} />
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
		marginVertical: 15
	}
});
