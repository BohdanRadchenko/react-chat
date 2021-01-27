import React from 'react';
import PropTypes from 'prop-types';

import {CheckOutlined} from '@ant-design/icons';

import Avatar from '../Avatar';
import {getUnreadMessageCount} from '../../helpers/dialog.helpers';

const DialogItem = ({name, id, isOnline, avatar, dialogs}) => {
	const unreadCount = getUnreadMessageCount(dialogs);

	return (
			<div className="dialog-panel__item">

				<div className="dialog-panel__item__avatar">
					<Avatar id={id} isOnline={isOnline} avatar={avatar}/>
				</div>

				<div className="dialog-panel__item__content">
					<h3 className="dialog-panel__item__content__name">
						{name}
					</h3>
					<p className="dialog-panel__item__content__message">
						{dialogs[dialogs.length - 1].message}
					</p>
				</div>

				<div className="dialog-panel__item__time">
					<p>{dialogs[dialogs.length - 1].time}</p>
				</div>

				{!!unreadCount && (
						<div className="dialog-panel__item__unread">
							{unreadCount}
						</div>
				)}

				{!unreadCount && (
						<div className="dialog-panel__item__read">
							<CheckOutlined/>
						</div>
				)}

			</div>
	);
};

DialogItem.propTypes = {
	isOnline: PropTypes.bool,
	id: PropTypes.string,
	name: PropTypes.string,
	avatar: PropTypes.string,
};

export default DialogItem;