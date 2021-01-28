export const getSearchFilter = (array, value) => {
	if (!value) return array;

	const filterName = array.filter(
			el => el.name.toLowerCase().includes(value.toLowerCase()));
	//
	// const filterMessage = array.reduce((acc, el) => {
	// 	const dF = el.dialogs.filter(dialog => {
	// 		dialog.message.toLowerCase().includes(value.toLowerCase())
	// 	})
	// 	console.log('dF => ', dF)
	// }, []);

	return !!filterName.length ? filterName : array;
};

export const getUnreadMessageCount = dialogs => {
	const result = dialogs.reduce((acc, dialog) => {
		if (dialog.read) return acc = acc + 1;
		return acc;
	}, 0);
	return result > 9 ? '+9' : result;
};