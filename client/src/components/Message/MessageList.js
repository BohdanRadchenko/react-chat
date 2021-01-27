import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import MessageItem from './MessageItem';

const MessageList = ({dialogs, style, height}) => {
	const messagesEndRef = useRef(null);

	const scrollToBottom = () => {
		console.log('scrollToBottom');
		messagesEndRef.current?.scrollIntoView({
			behavior: 'smooth',
		});
	};

	useEffect(scrollToBottom, [dialogs, height]);

	return (
			<ul
					className="message-panel__list"
					style={{...style, height: `calc(100% - ${height + 44}px)`}}
			>
				{dialogs.map(dialog => (
						<li key={dialog.id} className="message-panel__list__item">
							<MessageItem {...dialog}/>
						</li>
				))}
				<li
						ref={messagesEndRef}
						style={{height: '10px'}}
				/>
			</ul>
	);
};

MessageList.propTypes = {
	dialogs: PropTypes.array,
	style: PropTypes.object,
	height: PropTypes.number,
};

export default MessageList;