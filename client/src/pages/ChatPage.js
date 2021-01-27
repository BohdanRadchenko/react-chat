import React from 'react';
import {useLocation} from 'react-router';

import DialogPanel from '../components/Dialog/DialogPanel';
import MessagePanel from '../components/Message/MessagePanel';

import {getDialogId} from '../helpers/path.helpers';

const ChatPage = () => {
	const {pathname} = useLocation();
	const userId = getDialogId(pathname);

	return (
			<div className="chat">
				<div className="chat__left">
					<DialogPanel/>
				</div>
				<div className="chat__right">
					{!!userId && (
							<MessagePanel/>
					)}
				</div>
			</div>
	);
};

export default ChatPage;