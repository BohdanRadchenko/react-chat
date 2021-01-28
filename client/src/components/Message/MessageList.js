import React, {useCallback, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MessageItem from './MessageItem';
import {isSelectedItem} from '../../helpers/message.helpers';
import {useOnloadPage} from '../../hook/useOnloadPage';

const MessageList = ({dialog, style, toggleSelectedElement, selectedList}) => {
	const messagesEndRef = useRef(null);

	const moveToBottom = useCallback(() => {
		messagesEndRef.current?.scrollIntoView({
			behavior: 'smooth',
		});
	}, []);

	useOnloadPage(moveToBottom);

	useEffect(() => {
		moveToBottom();
	}, [dialog, moveToBottom]);

	return (
			<ul
					className="message-panel__list"
					style={{...style}}
			>
				{dialog && dialog.map(m => (
						<li
								key={m.message_id}
								className={classnames('message-panel__list__item', {
									'selected': isSelectedItem(selectedList, m.message_id),
								})}
								onClick={e => toggleSelectedElement(m)}
						>
							<MessageItem {...m}/>
						</li>
				))}
				<li
						style={{height: '40px'}}
				/>
				<li
						ref={messagesEndRef}
						style={{height: '10px'}}
				/>

			</ul>
	);
};

MessageList.propTypes = {
	style: PropTypes.object,
	dialog: PropTypes.array,
	selectedList: PropTypes.array,
	toggleSelectedElement: PropTypes.func,
};

export default MessageList;