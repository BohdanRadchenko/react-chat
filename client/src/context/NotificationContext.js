import {createContext} from 'react';

const defaultContext = {
	notificationList: [],
	notificationCreate: () => {},
	notificationRemove: () => {},
	notification: {},
}

const NotificationContext = createContext(defaultContext);

export default NotificationContext;