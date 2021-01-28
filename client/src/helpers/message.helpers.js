export const MESSAGE = {
	ERROR: {
		VALID_TEXT: 'Name is required.',
		VALID_EMAIL: 'Must be a valid email address.',
		VALID_PASSWORD: 'Your password must be at least 8 characters as well as contain at least one uppercase or lowercase, and one number.',
		VALID_CONFIRM: 'Passwords must be match.',
	},
};

export const isSelectedItem = (array, id) => {
	if (!array.length) return false
	return !!array.find(el => el.message_id === id)
}
