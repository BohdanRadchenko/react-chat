import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {UserOutlined} from '@ant-design/icons';

import {getGradientAvatar} from '../helpers/avatar.helpers';

const Avatar = ({avatar, id, isOnline, style = {}}) => {

	const gradientAvatar = getGradientAvatar(id);

	return (
			<Link to={`/im/user/${id}`} className="avatar">
				<div
						className="avatar__image"
						style={{...style, ...gradientAvatar}}
				>
					{!!avatar ? (
									<img src={avatar} alt="avatar"/>
							)
							: (
									<UserOutlined/>
							)}
				</div>
				{isOnline && (
						<div className="avatar__icon"/>
				)}
			</Link>
	);
};

Avatar.defaultProps = {
	avatar: '../',
	isOnline: false,
};

Avatar.propTypes = {
	id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
	avatar: PropTypes.string,
};

export default Avatar;