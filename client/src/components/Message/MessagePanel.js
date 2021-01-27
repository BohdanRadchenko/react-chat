import React, {useRef, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useLocation} from 'react-router';

import {
	AudioOutlined,
	CameraOutlined,
	MoreOutlined,
	SendOutlined,
	SmileOutlined,
} from '@ant-design/icons';

import Header from '../Header';
import MessageList from './MessageList';
import TextArea from '../Input/TextArea';

import {getDialogId} from '../../helpers/path.helpers';
import {testContacts, testMessage} from '../../options';

const MessagePanel = () => {
	const [height, setHeight] = useState(0);
	const [value, setValue] = useState('');
	const [dialogs, setDialogs] = useState(testMessage);

	const history = useHistory();
	const {pathname} = useLocation();
	const userId = getDialogId(pathname);

	const textareaRef = useRef(null);

	const user = testContacts.find(el => el.id === userId);

	const handlerHeightTextarea = height => {
		setHeight(height);
	};

	const handleChange = value => {
		setValue(value);
	};

	const handlePressEnter = e => {
		e && e.preventDefault();
		if (!value) {
			return textareaRef && textareaRef.current.focus();
		}

		const message = {
			id: Date.now().toString(),
			sender: '1',
			message: value,
			read: false,
			time: 'Сейчас',
		};
		setDialogs(prev => [...prev, message]);
	};

	return (
			<div className="message-panel">

				<Header>
					<div className="message-panel__header">

						<div
								className="message-panel__header__desc"
								onClick={e => history.push(`/im/user/${user.id}`)}
						>
							<h3 className="message-panel__header__name">
								{user.name}
							</h3>
							<div
									className={`message-panel__header__status
										${user.isOnline ? 'online' : ''}
									`}
							>
								<div className="message-panel__header__status__icon">
									<span/>
								</div>
								<p>
									{user.isOnline ? 'online' : 'offline'}
								</p>
							</div>
						</div>

						<div
								className="message-panel__header__more"
								onClick={e => console.log('header more button click')}
						>
							<MoreOutlined rotate={90}/>
						</div>
					</div>
				</Header>

				<div className="message-panel__content">
					<MessageList
							dialogs={dialogs}
							height={height}
					/>
					<div className="message-panel__textarea">
						<div className="message-panel__textarea__wrapper">
							<div className="message-panel__textarea__icon__group">
								<div className="message-panel__textarea__icon">
									<SmileOutlined/>
								</div>
							</div>
							<TextArea
									reference={textareaRef}
									className="message-panel__textarea__input"
									placeholder="Write a message..."
									value={value}
									onHeight={handlerHeightTextarea}
									onChange={handleChange}
									onPressEnter={handlePressEnter}
									clearOnEnter
							/>
							<div className="message-panel__textarea__icon__group">
								<div className="message-panel__textarea__icon">
									<CameraOutlined/>
								</div>
								<div className="message-panel__textarea__icon">
									<AudioOutlined/>
								</div>
								<div
										className="message-panel__textarea__icon"
										onClick={e => handlePressEnter(e)}
								>
									<SendOutlined/>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
	);
};

export default MessagePanel;