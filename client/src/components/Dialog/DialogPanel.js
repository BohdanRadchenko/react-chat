import React, {useState} from 'react';

import {FormOutlined, TeamOutlined} from '@ant-design/icons';

import Header from '../Header';
import SearchInput from '../Input/SearchInput';
import DialogList from './DialogList';
import {getSearchFilter} from '../../helpers/dialog.helpers';

import {testContacts} from '../../options';

const DialogPanel = () => {
	const [searchValue, setSearchValue] = useState('');

	const handleChange = value => {
		setSearchValue(value);
	};

	const contacts = testContacts;

	const filteredContacts = getSearchFilter(contacts, searchValue);

	return (
			<div className="dialog-panel">

				<Header>
					<div className="dialog-panel__header">
						<div className="dialog-panel__header__wrapper">
							<div className="dialog-panel__header__icon">
								<TeamOutlined/>
							</div>
							<h4 className="dialog-panel__header__title">
								Список диалогов
							</h4>
						</div>

						<div className="dialog-panel__header__icon">
							<FormOutlined/>
						</div>
					</div>
				</Header>

				<div className="dialog-panel__content">
					<div className="dialog-panel__search">
						<SearchInput
								onChange={handleChange}
								value={searchValue}
								placeholder={'Поиск среди контактов'}
						/>
					</div>

					<DialogList contacts={filteredContacts}/>
				</div>

			</div>
	);
};

export default DialogPanel;