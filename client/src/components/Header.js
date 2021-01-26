import React from 'react';
import PropTypes from 'prop-types';

const Header = ({children}) => {
	return (
			<div className="header">
				{children}
			</div>
	);
};

Header.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.node,
		PropTypes.oneOf(['null']),
	]),
};

export default Header;