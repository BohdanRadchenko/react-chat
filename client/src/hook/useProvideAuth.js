import {useState} from 'react';

export const useProvideAuth = () => {
	const [user, setUser] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(true);

	const signin = cb => {
		setUser('user');
		setIsAuthenticated(true);
		cb();
	};

	const signout = cb => {
		setUser(null);
		setIsAuthenticated(false);
		cb();
	};

	return {
		user,
		isAuthenticated,
		signin,
		signout,
	};
};