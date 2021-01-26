import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
	CheckCircleOutlined,
	CloseCircleOutlined,
	EyeInvisibleOutlined,
	EyeOutlined,
} from '@ant-design/icons';
import classNames from 'classnames';
import {
	getInputErrorMessage,
	getInputId,
	getInputValidation,
	removeSpace,
} from '../../helpers/form.helpers';

const ICONS = {
	CHECK: <CheckCircleOutlined/>,
	CLOSE: <CloseCircleOutlined/>,
	VISIBLE: <EyeOutlined/>,
	INVISIBLE: <EyeInvisibleOutlined/>,
};

const initialState = {
	inputValue: '',
	isValidInput: false,
	errorMessage: '',
	showPassword: false,
};

const Input = ({
	               name,
	               type = 'text',
	               required = false,
	               placeholder = '',
	               onChange = null,
               }) => {
	const [inputValue, setInputValue] = useState(initialState.inputValue);
	const [isValidInput, setIsValidInput] = useState(initialState.isValidInput);
	const [errorMessage, setErrorMessage] = useState(initialState.errorMessage);
	const [showPassword, setShowPassword] = useState(initialState.showPassword);
	const inputType = (type === 'password' || type === 'confirm')
			? showPassword
					? 'text'
					: 'password'
			: type;
	const id = getInputId(name);

	useEffect(() => {
		setIsValidInput(getInputValidation(type, inputValue));
	}, [inputValue, type]);

	useEffect(() => {
		setErrorMessage(getInputErrorMessage(type));
	}, [type]);

	const handleChange = e => {
		const value = removeSpace(type, e.target.value);
		setInputValue(value);
		onChange && onChange({name, type, value});
	};

	return (
			<div className={'input--wrapper'}>
				<div
						className={classNames('input', {
							'i-valid': isValidInput,
							'i-invalid': !isValidInput,
						})}>
					<input type={inputType}
					       className='input--input'
					       id={id}
					       name={name}
					       value={inputValue}
					       placeholder=' '
					       onChange={handleChange}
					/>
					<label
							htmlFor={id}
							className={classNames('input--label', {
								'--required': required,
							})}
					>
						{placeholder}
					</label>

					<div className="input--icon">
						{isValidInput ? ICONS.CHECK : ICONS.CLOSE}
					</div>

					{(type === 'password' || type === 'confirm') && (
							<div className={'input--icon--password'}
							     onClick={e => setShowPassword(!showPassword)}
							>
								{showPassword ? ICONS.VISIBLE : ICONS.INVISIBLE}
							</div>
					)}
				</div>


				<p className="input--requirements">
					{isValidInput ? '' : errorMessage}
				</p>

			</div>
	);
};

Input.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	onChange: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.oneOf([null]),
	]),
};

export default Input;