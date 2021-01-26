import React from 'react';
import PropTypes from 'prop-types';

const FormDescription = ({title = '', subtitle = ''}) => {
	return (
			<div className='auth__description'>
				<h2>{title}</h2>
				<p>{subtitle}</p>
			</div>
	);
};

FormDescription.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
};

export default FormDescription;