import {useCallback, useState} from 'react';
import {v4 as createId} from 'uuid';

export const useNotification = () => {
	const [list, setList] = useState([]);

	const create = useCallback(data => {
		const newNotify = {
			id: createId(),
			data: Date.now(),
			...data,
		};
		setList(prev => [
				...prev,
				newNotify
		]);
	}, []);

	const remove = useCallback((id) => {
		const newList = list.filter(item => item.id !== id);
		setList(newList);
	}, [list]);

	const notification = {
		info: props => {
			create({
				...props,
				type: 'info',
			});
		},
		warning: props => {
			create({
				...props,
				type: 'warning',
			});
		},
		error: props => {
			create({
				...props,
				type: 'error',
			});
		},
		success: props => {
			create({
				...props,
				type: 'success',
			});
		},
	};

	return {
		notificationList: list,
		notificationCreate: create,
		notificationRemove: remove,
		notification: notification,
	};
};