import React from 'react';
import PropTypes from 'prop-types';

import {CheckOutlined} from '@ant-design/icons';
import classnames from 'classnames';

import Avatar from '../Avatar';

const yourId = '1';

const MessageItem = ({id, avatar, message, time, sender, userId, read}) => {

	return (
			<div
					className={classnames('message-panel__item', {
						'reverse': sender === yourId,
					})}
			>
				<div className="message-panel__item__avatar">
					<Avatar id={userId} avatar={avatar}/>
				</div>

				<div className="message-panel__item__bubble">
					<p className="message-panel__item__text">
						{message}
					</p>
					<div className="message-panel__item__time">
						{time}
					</div>

					{read && (
							<div className="message-panel__item__checked">
								{sender === yourId ? <CheckOutlined/> : ''}
							</div>
					)}
				</div>
			</div>
	);
};

MessageItem.propTypes = {
	id: PropTypes.string,
	userId: PropTypes.string,
	avatar: PropTypes.string,
	time: PropTypes.string,
	message: PropTypes.string,
	sender: PropTypes.string,
	read: PropTypes.bool,
};

export default MessageItem;