import React from 'react';
import PropTypes from 'prop-types'

const BaseBlockForm = ({children}) => {
	return (
			<div className='auth__base-block-form'>
				{children}
			</div>
	);
};

BaseBlockForm.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.element
	])
}

export default BaseBlockForm;