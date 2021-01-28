import React from 'react';
import PropTypes from 'prop-types';

import {CheckOutlined} from '@ant-design/icons';
import classnames from 'classnames';

import Avatar from '../Avatar';
import {getTimeDistance} from '../../helpers/date.helpers';

const yourId = '1';

const MessageItem = ({
	                     message_id,
	                     sender_id,
	                     sender_avatar = '',
	                     message = '',
	                     message_time,
	                     read = false,
	                     attachments,
	                     typing = false,
                     }) => {

	const handleAttachmentClick = (e, item) => {
		console.log('handle attachment click => ', item.attachment_id);
		e && e.stopPropagation();
	};

	const currentUserId = '00-00';

	if (typing && sender_id === currentUserId) {
		return null;
	}

	return (
			<div
					className={classnames('message-panel__item', {
						'reverse': sender_id === currentUserId,
						'typing': typing,
					})}
			>
				<div className="message-panel__item__avatar">
					<Avatar id={sender_id} avatar={sender_avatar}/>
				</div>

				<div className="message-panel__item__content">

					{(message || typing) && (
							<div className="message-panel__item__bubble">

								{typing && (
										<div className="message-panel__item__typing">
											<span className="message-panel__item__typing__circle"/>
											<span className="message-panel__item__typing__circle"/>
											<span className="message-panel__item__typing__circle"/>
										</div>
								)}

								<p className="message-panel__item__text">
									{message}
								</p>

								{read && (
										<div className="message-panel__item__checked">
											{sender_id === currentUserId ? <CheckOutlined/> : ''}
										</div>
								)}
							</div>
					)}

					{attachments && !!attachments.length && (
							<div className="message-panel__item__attachments">
								{attachments.map(el => (
										<div
												onClick={e => handleAttachmentClick(e, el)}
												className={classnames(
														'message-panel__item__attachments__item', {
															'single': attachments.length === 1,
														})}
												key={el.attachment_id}
										>
											<img
													src={el.url}
													alt={el.attachment_id}
													className="message-panel__item__attachments__item-url"
											/>
										</div>
								))}
							</div>
					)}

					{message_time && (
							<div className="message-panel__item__time">
								{getTimeDistance(message_time)}
							</div>
					)}

				</div>

			</div>
	);
};

MessageItem.propTypes = {
	message_id: PropTypes.string,
	sender_id: PropTypes.string,
	sender_avatar: PropTypes.string,
	message_time: PropTypes.string,
	message: PropTypes.string,
	sender: PropTypes.string,
	read: PropTypes.bool,
	typing: PropTypes.bool,
	attachments: 	PropTypes.array,
};

export default MessageItem;