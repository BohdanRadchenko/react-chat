export const getRandomString = (quantity = 8) => {
	return Math.random().toString(36).slice(-quantity);
};