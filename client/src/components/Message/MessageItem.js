import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import Avatar from '../Avatar';

const yourId = '1';

const MessageItem = ({id, avatar, message, time, sender}) => {

	return (
			<div
					className={classnames('message-panel__item', {
						'reverse': sender === yourId,
					})}
			>
				<div className="message-panel__item__avatar">
					<Avatar id={id} avatar={''}/>
				</div>

				<div className="message-panel__item__bubble">
				<p className="message-panel__item__text">
						{message}
					</p>
					<div className="message-panel__item__time">
						{time}
					</div>
				</div>
			</div>
	);
};

MessageItem.propTypes = {
	id: PropTypes.string,
	avatar: PropTypes.string,
	time: PropTypes.string,
	message: PropTypes.string,
	sender: PropTypes.string,
};

export default MessageItem;