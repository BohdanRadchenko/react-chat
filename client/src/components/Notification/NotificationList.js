import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import NotificationDraw from './NotificationDraw';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import NotificationContext from '../../context/NotificationContext';

const NotificationList = ({style}) => {
	const {notificationList} = useContext(NotificationContext);
	return (
			<>
				<TransitionGroup component='ul' className="notification__list">
					{notificationList.map(notify => (
							<CSSTransition
									key={notify.id}
									classNames={style}
									timeout={500}
									mountOnEnter
									unmountOnExit
									enter
									exit
							>
								<NotificationDraw key={notify.id} {...notify} />
							</CSSTransition>
					))}
				</TransitionGroup>
			</>
	);
};

Notification.propTypes = {
	style: PropTypes.object,
};

export default NotificationList;