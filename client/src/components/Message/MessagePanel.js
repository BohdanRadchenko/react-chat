import React, {useRef, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useLocation} from 'react-router';

import {
	AudioOutlined,
	CameraOutlined,
	DeleteOutlined,
	MoreOutlined,
	SendOutlined,
	SmileOutlined,
	SelectOutlined,
} from '@ant-design/icons';

import Header from '../Header';
import MessageList from './MessageList';
import TextArea from '../Input/TextArea';

import {getDialogId} from '../../helpers/path.helpers';
import {testContacts, testMessage} from '../../options';
import {isSelectedItem} from '../../helpers/message.helpers';

const MessagePanel = () => {
	const [height, setHeight] = useState(0);
	const [value, setValue] = useState('');
	const [dialogs, setDialogs] = useState(testMessage);
	const [selectedList, setSelectedList] = useState([]);

	const history = useHistory();
	const {pathname} = useLocation();
	const userId = getDialogId(pathname);

	const textareaRef = useRef(null);

	const user = testContacts.find(el => el.id === userId);

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
			userId: '1',
			avatar: ''
		};
		setDialogs(prev => [...prev, message]);
	};

	const toggleSelectedElement = dialog => {
		if (isSelectedItem(selectedList, dialog.id)) {
			const newList = selectedList.filter(el => el.id !== dialog.id);
			return setSelectedList(newList);
		}
		return setSelectedList(prev => [...prev, dialog]);
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

					{!!selectedList.length && (
							<div className="message-panel__content__context">
								<div className="message-panel__content__context__icon red">
									<span>
										<DeleteOutlined/>
									</span>
									<p className="message-panel__content__context__icon__text">
										Delete
									</p>
								</div>

								<p className="message-panel__content__context__count">
									<span>{selectedList.length}</span> message selected
								</p>

								<div
										className="message-panel__content__context__icon blue reverse">
									<span>
										<SelectOutlined />
									</span>
									<p className="message-panel__content__context__icon__text">
										Forward
									</p>
								</div>
							</div>
					)}


					<MessageList
							dialogs={dialogs}
							selectedList={selectedList}
							toggleSelectedElement={toggleSelectedElement}
							style={{height: `calc(100% - ${height + 44 + (!!selectedList.length ? 40 : 0) }px)`}}
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
									onHeight={height => setHeight(height)}
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