import React from 'react';
import {useHistory} from 'react-router-dom';
import {useLocation} from 'react-router';
import {useAuth} from '../hook/useAuth';
import LoginForm from '../components/Form/LoginForm';
import FormDescription from '../components/Form/FormDescription';
import BaseBlockForm from '../components/Form/BaseBlockForm';

const LoginPage = () => {
	const history = useHistory();
	const location = useLocation();
	const auth = useAuth();

	const {from} = location.state || {from: {pathname: '/'}};
	const login = () => {
		auth.signin(() => {
			history.replace(from);
		});
	};
	const logout = () => {
		auth.signout(() => {
			history.replace('/auth/register');
		});
	};

	return (
			<div className='auth'>
				<FormDescription
						title={'Войти в аккаунт'}
						subtitle={'Пожалуйста, войдите в свой аккаунт'}
				/>
				<BaseBlockForm>
					<LoginForm/>
				</BaseBlockForm>
			</div>
	);
};

export default LoginPage;