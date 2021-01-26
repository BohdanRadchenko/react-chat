import React from 'react';
import {Redirect, Switch} from 'react-router';

import {PrivateRoute} from '../routes/PrivateRoute';

import ContainerMenu from '../components/ContainerMenu';

import UserPage from './UserPage';
import ChatPage from './ChatPage';
import ApplicationPage from './ApplicationPage';
import SettingsPage from './SettingsPage';
import AboutPage from './AboutPage';

const MainPage = () => {

	return (
			<ContainerMenu>
				<Switch>
					<PrivateRoute path="/im/user/:id">
						<UserPage/>
					</PrivateRoute>

					<PrivateRoute path="/im/dialog">
						<ChatPage/>
					</PrivateRoute>

					<PrivateRoute path="/im/application">
						<ApplicationPage/>
					</PrivateRoute>

					<PrivateRoute path="/im/settings">
						<SettingsPage/>
					</PrivateRoute>

					<PrivateRoute path="/im/about">
						<AboutPage/>
					</PrivateRoute>

					<Redirect to="/im/dialog"/>
				</Switch>
			</ContainerMenu>
	);
};

export default MainPage;