import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {PrivateRoute} from './PrivateRoute';
import AuthPage from '../pages/AuthPage';
import MainPage from '../pages/MainPage';
import OopsPage from '../pages/OopsPage';

export const userRouters = () => {
	return (
			<Switch>

				<PrivateRoute path="/im">
					<MainPage/>
				</PrivateRoute>

				<PrivateRoute path="/" exact={true}>
					<MainPage/>
				</PrivateRoute>

				<Route path="/auth">
					<AuthPage/>
				</Route>

				<Route path="/oops">
					<OopsPage/>
				</Route>

				<Redirect to="/oops"/>
			</Switch>
	);
};
