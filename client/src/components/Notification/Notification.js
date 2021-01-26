import React from 'react';
import PropTypes from 'prop-types';
import NotificationContext from '../../context/NotificationContext';
import {getNotificationClasses} from '../../helpers/notification.helpers';
import {useNotification} from '../../hook/useNotification';
import NotificationList from './NotificationList';

const Notification = ({children, position = 'top-right'}) => {
	const {container, transition} = getNotificationClasses(position);
	const {
		notificationList,
		notificationCreate,
		notificationRemove,
		notification,
	} = useNotification();
	return (
			<NotificationContext.Provider
					value={{
						notificationList,
						notificationCreate,
						notificationRemove,
						notification,
					}}
			>
				<div className={container}>
					<NotificationList style={transition}/>
				</div>
				{children}
			</NotificationContext.Provider>
	);
};

Notification.propTypes = {
	position: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.node,
		PropTypes.oneOf(['null']),
	]),
};

export default Notification;