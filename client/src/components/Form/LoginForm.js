import React, {useState, useContext} from 'react';
import BaseButton from '../Buttons/BaseButton';
import Input from '../Input/Input';
import {useLocation} from 'react-router';
import NotificationContext from '../../context/NotificationContext';
import {getFormValidation} from '../../helpers/form.helpers';
import {useHistory} from 'react-router-dom';

const initialState = {
	data: {
		email: '',
		password: '',
	}
}

const LoginForm = () => {
	const [form, setForm] = useState(initialState.data);
	const {notification} = useContext(NotificationContext);
	const history = useHistory();
	const {state} = useLocation();
	const {from} = state || {from: {pathname: '/'}};

	const handleInput = ({name, value}) => {
		setForm({...form, ...{[name]: value}});
	}

	const handleSubmit = () => {
		const data = getFormValidation('login', form);
		if (data.valid) {
			notification.success({message: 'Login success'});
			history.replace(from);
		} else {
			data.error.forEach(err => {
				notification.error({message: err.message});
			});
		}
	};

	return (
			<form>
				<Input
						name='email'
						type='email'
						placeholder='E-Mail'
						onChange={handleInput}
						required={true}
						autocomplete
				/>
				<Input
						name='password'
						type='password'
						placeholder='Password'
						onChange={handleInput}
						required={true}
						autocomplete
				/>
				<BaseButton type='submit' title='войти в аккаунт'
				            onClick={handleSubmit}/>
			</form>
	);
};

LoginForm.propTypes = {};

export default LoginForm;