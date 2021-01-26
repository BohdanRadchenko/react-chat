import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import classnames from 'classnames';

const MenuButton = ({children, to, title = '', icon, isOpen = true}) => {
	return (
			<NavLink
					to={to}
					activeClassName="menu-link--selected"
					className={classnames('menu-link', {
						'-full': isOpen,
					})}
			>
				<div className="menu-link--icon">
					{icon}
				</div>

				{isOpen && (
						<div className="menu-link--desc">
							{title}
						</div>
				)}

				<div className="menu-link--children">
					{children}
				</div>
			</NavLink>
	);
};

MenuButton.propTypes = {
	isOpen: PropTypes.bool,
	title: PropTypes.string,
	to: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.element,
	]),
	icon: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.element,
	]),
};

export default MenuButton;