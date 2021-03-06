import React from 'react';
import PropTypes from 'prop-types';
import {useLocation} from 'react-router';
import {useHistory} from 'react-router-dom';

import DialogItem from './DialogItem';
import {getDialogId} from '../../helpers/path.helpers';

const DialogList = ({contacts}) => {
	const history = useHistory();
	const {pathname} = useLocation();
	const pathId = getDialogId(pathname);

	const isActiveDialog = id => {
		return pathId === id;
	};

	return (
			<ul className="dialog-panel__list">
				{contacts.map(contact => (
						<li onClick={e => history.push(`/im/dialog/${contact.user_id}`)}
						    key={contact.user_id}
						    className={`dialog-panel__list__item
								${isActiveDialog(contact.user_id) ? 'active' : ''}`}
						>
							<DialogItem {...contact} active={isActiveDialog(contact.user_id)}/>
						</li>
				))}
			</ul>
	);
};

DialogList.propTypes = {
	contacts: PropTypes.array,
};

export default DialogList;