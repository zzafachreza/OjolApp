import { combineReducers } from 'redux';

const initialState = {
	name: 'Abu Hanif al fauzan'
};

const initialRegister = {
	form: {
		fullName: '',
		email: '',
		password: ''
	},
	title: 'masukan username aanda',
	desc: 'ini adalah desc'
};

const initialLogin = {
	info: 'ini adalah info',
	form: {
		username: '',
		password: ''
	}
};

const reducerRegister = (state = initialRegister, action) => {
	if (action.type === 'SET_TITLE') {
		return {
			...state,
			title: 'register ganti titles'
		};
	}

	if (action.type === 'SET_FORM') {
		return {
			...state,
			form: {
				...state.form,
				[action.inputType]: action.inputValue
			}
		};
	}
	return state;
};

const reducerLogin = (state = initialLogin, action) => {
	if (action.type === 'SET_FORM') {
		return {
			...state,
			form: {
				...state.form,
				[action.inputType]: action.inputValue
			}
		};
	}
	return state;
};

const reducer = combineReducers({
	reducerRegister,
	reducerLogin
});

export default reducer;
