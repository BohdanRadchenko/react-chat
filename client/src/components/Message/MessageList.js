import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MessageItem from './MessageItem';
import {isSelectedItem} from '../../helpers/message.helpers';

const MessageList = ({dialogs, style, toggleSelectedElement, selectedList}) => {
	const messagesEndRef = useRef(null);

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({
			behavior: 'smooth',
		});
	}, [dialogs]);

	return (
			<ul
					className="message-panel__list"
					style={{...style}}
			>
				{dialogs.map(dialog => (
						<li
								key={dialog.id}
								className={classnames('message-panel__list__item', {
									'selected': isSelectedItem(selectedList, dialog.id),
								})}
								onClick={e => toggleSelectedElement(dialog)}
						>
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
	style: PropTypes.object,
	dialogs: PropTypes.array,
	selectedList: PropTypes.array,
	toggleSelectedElement: PropTypes.func,
};

export default MessageList;