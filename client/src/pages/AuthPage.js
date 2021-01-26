import React from 'react';
import {Redirect, useLocation} from 'react-router';
import LoginForm from '../components/Form/LoginForm';
import FormDescription from '../components/Form/FormDescription';
import BaseBlockForm from '../components/Form/BaseBlockForm';
import {Route, Switch} from 'react-router-dom';
import RegisterForm from '../components/Form/RegisterForm';
import BaseNavLink from '../components/Buttons/BaseNavLink';
import AuthConfirm from '../components/AuthConfirm';

const LoginPage = () => {
	const location = useLocation();
	const path = location.pathname;

	const getFormTitle = () => {
		return path.includes('login')
				? 'Войти в аккаунт'
				: 'Регистрация';
	};
	const getFormSubtitle = () => {
		return path.includes('login')
				? 'Пожалуйста, войдите в свой аккаунт'
				: 'Для входа в чат, вам нужно зарегистрироваться';
	};

	const getFormBaseLink = () => {
		const title = path.includes('login')
				? 'Зарегистрироваться'
				: 'Войти в аккаунт';
		const route = path.includes('login')
				? '/auth/register'
				: '/auth/login';

		return (
				<BaseNavLink to={route} title={title}/>
		);
	};

	return (
			<div className='auth'>
				<FormDescription
						title={getFormTitle()}
						subtitle={getFormSubtitle()}
				/>
				<BaseBlockForm>
					<Switch>
						<Route path="/auth/login">
							<LoginForm/>
						</Route>
						<Route path="/auth/register" exact>
							<RegisterForm/>
						</Route>
						<Route path="/auth/register/confirm">
							<AuthConfirm/>
						</Route>
						<Redirect to={'/auth/login'}/>
					</Switch>
					{getFormBaseLink()}
				</BaseBlockForm>
			</div>
	);
};

export default LoginPage;