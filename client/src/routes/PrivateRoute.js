import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useAuth} from '../hook/useAuth';

export const PrivateRoute = ({children, ...rest}) => {
	const auth = useAuth();
	return (
			<Route
					{...rest}
					render={({location}) =>
							auth.isAuthenticated ? (
									children
							) : (
									<Redirect
											to={{
												pathname: '/auth/login',
												state: {from: location},
											}}
									/>
							)
					}
			/>
	);
};