import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {UserOutlined} from '@ant-design/icons';

const Avatar = ({avatar, id, isOnline}) => {
	return (
			<Link to={`/im/user/${id}`} className="avatar">
				<div className="avatar__image">
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