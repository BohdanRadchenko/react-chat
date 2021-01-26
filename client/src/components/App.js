import React from 'react';

import AuthContext from '../context/AuthContext';
import {useProvideAuth} from '../hook/useProvideAuth';
import Notification from './Notification/Notification';
import {userRouters} from '../routes/routes';
import Loader from './Loaders/BaseLoader';
import CursorLoader from './Loaders/CursorLoader';

const App = () => {
	const route = userRouters();
	const auth = useProvideAuth();
	const loader = {
		base: false,
		cursor: false,
	};

	return (
			<AuthContext.Provider value={auth}>
				<CursorLoader isLoading={loader.cursor}/>
				<Loader isLoading={loader.base}>
					<Notification position="top-right">
						{route}
					</Notification>
				</Loader>
			</AuthContext.Provider>
	);
};

export default App;