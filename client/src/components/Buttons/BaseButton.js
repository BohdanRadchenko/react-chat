import React from 'react';
import PropTypes from 'prop-types';

const BaseButton = ({
	                    children,
	                    title = '',
	                    onClick = null,
	                    type = 'button',
                    }) => {

	const handleButtonClick = e => {
		e.preventDefault();
		onClick && onClick();
	};
	return (
			<button
					// type={type}
					className='button button__base'
					onClick={handleButtonClick}
			>
				{title && <p>{title}</p>}
				{children}
			</button>
	);
};

BaseButton.propTypes = {
	title: PropTypes.string,
	type: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.element,
	]),
};

export default BaseButton;