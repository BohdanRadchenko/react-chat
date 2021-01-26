export const getNotificationClasses =(position, type) => {
	const p = getNotificationValidPosition(position);

	const container = `notification__container ${p} ${
		(p === 'top-right' || p === 'bottom-right')
		? ''
		: 'reverse'
	}`;

	const transition = `notification-transition${
			(p === 'top-right' || p === 'bottom-right')
					? '-right'
					: '-left'
	}`;

	return {
		container,
		transition,
	};
};

export const getNotificationValidPosition = position => {
	return (position === 'top-left'
			|| position === 'bottom-left'
			|| position === 'top-right'
			|| position === 'bottom-right')
			? position : 'top-right';
};

export const getNotificationValidType = type => {
	return (type === 'info'
			|| type === 'warning'
			|| type === 'error'
			|| type === 'success')
			? type : 'info';
};

export const getTimerWidth = () => {
	return '100%'
}