import React, {useContext, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {
	CheckCircleFilled,
	ExclamationCircleFilled,
	InfoCircleFilled,
	WarningFilled,
} from '@ant-design/icons';
import NotificationContext from '../../context/NotificationContext';
import {
	getNotificationValidType,
	getTimerWidth,
} from '../../helpers/notification.helpers';
import {useHover} from '../../hook/useHover';

const ICON = {
	info: <InfoCircleFilled/>,
	success: <CheckCircleFilled/>,
	error: <ExclamationCircleFilled/>,
	warning: <WarningFilled/>,
};


const NotificationDraw = ({id, message, type, title, timeout}) => {
	const hoverRef = useRef(null);
	const isHover = useHover(hoverRef);
	const {notificationRemove} = useContext(NotificationContext);
	const Icon = ICON[getNotificationValidType(type)];

	const handleClick = e => {
		e && e.preventDefault();
		notificationRemove(id);
	};

	useEffect(() => {
		const t = setTimeout(() => {
			if (!isHover) {
				notificationRemove(id);
			}
		}, Number(timeout) || 1000);
		return () => {
			clearTimeout(t);
		};
	});

	return (
			<div
					ref={hoverRef}
					className={`notification__item ${getNotificationValidType(type)}`}
					onClick={e => handleClick(e)}
			>
				<div className="notification__item__icon">
					{Icon}
				</div>
				<div className="notification__item__description">
					<div className="notification__item__description__title">
						{title ? title : type}
					</div>
					<div className="notification__item__description__message">
						{message}
					</div>
				</div>
				<div
						className='notification__item__bar'
						style={{
							display: 'none',
							width: getTimerWidth(),
						}}
				/>
			</div>
	);
};

NotificationDraw.propTypes = {
	id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	type: PropTypes.string,
	title: PropTypes.string,
	message: PropTypes.string,
};

export default NotificationDraw;