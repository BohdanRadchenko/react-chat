import React from 'react';
import PropTypes from 'prop-types';

import {CheckOutlined} from '@ant-design/icons';

import Avatar from '../Avatar';
import {getTimeDistanceDialog} from '../../helpers/date.helpers';


const DialogItem = ({
	                    avatar,
	                    online,
	                    user_name,
	                    user_id,
	                    last_message,
	                    last_message_create_at,
	                    unread_count,
	                    active = true,
                    }) => {

	const time = getTimeDistanceDialog(last_message_create_at)

	return (
			<div className="dialog-panel__item">

				<div className="dialog-panel__item__avatar">
					<Avatar id={user_id} isOnline={online} avatar={avatar}/>
				</div>

				<div className="dialog-panel__item__content">
					<h3 className="dialog-panel__item__content__name">
						{user_name}
					</h3>
					<p className="dialog-panel__item__content__message">
						{last_message}
					</p>
				</div>

				<div className="dialog-panel__item__time">
						{time}
				</div>

				{!!unread_count && (
						<div className="dialog-panel__item__unread">
							{unread_count}
						</div>
				)}

				{!unread_count && !active && (
						<div className="dialog-panel__item__read">
							<CheckOutlined/>
						</div>
				)}

			</div>
	);
};

DialogItem.propTypes = {
	online: PropTypes.bool,
	active: PropTypes.bool,
	unread_count: PropTypes.number,
	avatar: PropTypes.string,
	user_name: PropTypes.string,
	user_id: PropTypes.string,
	last_message: PropTypes.string,
	last_message_create_at: PropTypes.string,
};

export default DialogItem;