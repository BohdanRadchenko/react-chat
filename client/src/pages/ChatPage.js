import React from 'react';
import DialogPanel from '../components/Dialog/DialogPanel';
import MessagePanel from '../components/MessagePanel';

const ChatPage = () => {
	return (
			<div className="chat">
				<div className="chat__left">
					<DialogPanel/>
				</div>
				<div className="chat__right">
					<MessagePanel/>
				</div>
			</div>
	);
};

export default ChatPage;