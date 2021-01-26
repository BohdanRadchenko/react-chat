import React from 'react';
import {InfoCircleOutlined} from '@ant-design/icons';

const AuthConfirm = () => {
	return (
			<div className='auth__confirm'>
				<InfoCircleOutlined className={'auth__confirm__icon'}/>
				<h2>
					Подтвердите свой аккаунт
				</h2>
				<p>
					На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.
				</p>
			</div>
	);
};

export default AuthConfirm;