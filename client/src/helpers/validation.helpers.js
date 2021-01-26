const REGEXP = {
	EMAIL: new RegExp(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/),
	PASSWORD: new RegExp(
			'^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,24})',
			'gmi'),
};

export const textValidation = value => {
	return !!value;
};
export const emailValidation = (value) => {
	return REGEXP.EMAIL.test(value);
};

export const passwordValidation = (value) => {
	return REGEXP.PASSWORD.test(value);
};

export const passwordConfirm = (pass, confirm) => {
	return pass === confirm;
};
