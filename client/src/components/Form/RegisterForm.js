import React, {useContext, useState} from 'react';
import NotificationContext from '../../context/NotificationContext';
import BaseButton from '../Buttons/BaseButton';
import Input from '../Input/Input';
import {getFormValidation} from '../../helpers/form.helpers';
import {useLocation} from 'react-router';
import {useHistory} from 'react-router-dom';

const initialState = {
	data: {
		name: '',
		email: '',
		password: '',
		confirm: '',
	},
};

const RegisterForm = () => {
	const [form, setForm] = useState(initialState.data);
	const {notification} = useContext(NotificationContext);
	const history = useHistory();
	const {state} = useLocation();
	const {from} = state || {from: {pathname: '/'}};

	const handleInput = ({name, value}) => {
		setForm({...form, ...{[name]: value}});
	};

	const handleSubmit = () => {
		const data = getFormValidation('register', form);
		if (data.valid) {
			notification.success({message: 'Registered success'});
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
						name='name'
						type='text'
						placeholder='Your name'
						onChange={handleInput}
						required={true}
						autocomplete
				/>
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
				<Input
						name='confirm'
						type='confirm'
						placeholder='Confirm password'
						onChange={handleInput}
						required={true}
						autocomplete
				/>
				<BaseButton
						type='submit'
						title='Зарегистрироваться'
						onClick={handleSubmit}
				/>
			</form>
	);
};

RegisterForm.propTypes = {};

export default RegisterForm;