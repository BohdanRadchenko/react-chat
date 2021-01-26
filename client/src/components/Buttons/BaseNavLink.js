import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

const BaseNavLink = ({children, title = '', to = ''}) => {
	return (
			<NavLink to={to} activeClassName="nav-link--selected"
			         className='nav-link'>
				{title ?? title}
				{children}
			</NavLink>

	);
};

BaseNavLink.propTypes = {
	title: PropTypes.string,
	to: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.element,
	]),
};

export default BaseNavLink;