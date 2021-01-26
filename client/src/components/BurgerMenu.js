import React from 'react';
import PropTypes from 'prop-types';

import {
	AliwangwangFilled,
	AppstoreFilled,
	SettingFilled,
	WechatFilled,
} from '@ant-design/icons';

import MenuButton from './Buttons/MenuButton';
import Avatar from './Avatar';

const user = {
	id: '1',
	avatar: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg',
};

const BurgerMenu = ({isOpen}) => {
	return (
			<nav className={`burger-menu ${isOpen ? 'open' : ''}`}>
				<div className="burger-menu__wrapper">

				<div className="burger-menu__avatar">
						<Avatar avatar={user.avatar} id={user.id}/>
					</div>

					<div className="burger-menu__link">
						<MenuButton
								to="/im/dialog"
								isOpen={isOpen}
								title='chat'
								icon={<WechatFilled/>}
						/>
						<MenuButton
								to="/im/application"
								isOpen={isOpen}
								title='application'
								icon={<AppstoreFilled/>}
						/>
						<MenuButton
								to="/im/settings"
								isOpen={isOpen}
								title='settings'
								icon={<SettingFilled/>}
						/>
						<MenuButton
								to="/im/about"
								isOpen={isOpen}
								title='about'
								icon={<AliwangwangFilled/>}
						/>
					</div>

				</div>
			</nav>
	);
};

BurgerMenu.propTypes = {
	isOpen: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.node,
		PropTypes.oneOf(['null']),
	]),
};

export default BurgerMenu;