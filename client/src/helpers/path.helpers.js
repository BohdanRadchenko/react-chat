export const getDialogId = pathname => {
	const re = new RegExp('/im/dialog', 'gmi');
	const v = pathname.replace(re, '');
	const value = v.split('/');
	return value[value.length - 1];
};