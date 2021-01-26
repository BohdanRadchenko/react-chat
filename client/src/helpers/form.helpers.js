import {
	emailValidation,
	passwordConfirm,
	passwordValidation,
	textValidation,
} from './validation.helpers';
import {getRandomString} from './generator.helpers';
import {MESSAGE} from './message.helpers';

const INPUT_TYPE = {
	text: {
		space: true,
		validation: textValidation,
		message: {
			error: MESSAGE.ERROR.VALID_TEXT,
		},
	},
	email: {
		space: false,
		validation: emailValidation,
		message: {
			error: MESSAGE.ERROR.VALID_EMAIL,
		},
	},
	password: {
		space: true,
		validation: passwordValidation,
		message: {
			error: MESSAGE.ERROR.VALID_PASSWORD,
		},
	},
	confirm: {
		space: true,
		validation: passwordValidation,
		message: {
			error: MESSAGE.ERROR.VALID_PASSWORD,
		},
	},
};

export const getInputValidation = (type, value) => {
	return INPUT_TYPE[type].validation(value);
};

export const removeSpace = (type, value) => {
	if (value && !INPUT_TYPE[type].space) return value.replace(/\s+/g, '');
	return value;
};

export const getInputErrorMessage = type => {
	return INPUT_TYPE[type].message.error;
};

export const getInputId = name => {
	return `id-${name}-input-${getRandomString()}`;
};

export const getFormValidation = (type = 'login', data = {
	name: '',
	email: '',
	password: '',
	confirm: '',
}) => {

	const result = {
		valid: true,
		error: [],
	};

	if (type === 'login') {
		if (!emailValidation(data.email)) {
			result.error.push({message: MESSAGE.ERROR.VALID_EMAIL});
		}
		if (!passwordValidation(data.password)) {
			result.error.push({message: MESSAGE.ERROR.VALID_PASSWORD});
		}
	}

	if (type === 'register') {
		if (!textValidation(data.name)) {
			result.error.push({message: MESSAGE.ERROR.VALID_TEXT});
		}
		if (!emailValidation(data.email)) {
			result.error.push({message: MESSAGE.ERROR.VALID_EMAIL});
		}
		if (!passwordValidation(data.confirm)
				|| !passwordValidation(data.password)) {
			result.error.push({message: MESSAGE.ERROR.VALID_PASSWORD});
		}
		if (!passwordConfirm(data.password, data.confirm)) {
			result.error.push({message: MESSAGE.ERROR.VALID_CONFIRM});
		}
	}

	if (result.error.length) {
		result.valid = false;
	}

	return result;
};


