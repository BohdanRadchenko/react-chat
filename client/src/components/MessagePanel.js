import React from 'react';
import {FormOutlined, TeamOutlined} from '@ant-design/icons';
import Header from './Header';

const MessagePanel = () => {
	return (
			<div className="dialog-panel">
				<Header>

					<div className="dialog-panel__header">
						<div className="dialog-panel__header__icon">
							<TeamOutlined/>
						</div>
						<h4 className="dialog-panel__header__title">
							Список диалогов
						</h4>
						<div className="dialog-panel__header__icon">
							<FormOutlined/>
						</div>
					</div>

				</Header>
			</div>
	);
};

export default MessagePanel;