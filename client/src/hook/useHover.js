import {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';

export const useHover = (ref, callbackIn = null, callbackOut = null) => {
	const [value, setValue] = useState(false);

	const handleMouseOver = useCallback(() => {
		setValue(true);
		callbackIn && callbackIn();
	}, [callbackIn]);

	const handleMouseOut = useCallback(() => {
		setValue(false);
		callbackOut && callbackOut();
	}, [callbackOut]);

	useEffect(() => {
		const node = ref?.current;
		if (node) {
			node.addEventListener('mouseover', handleMouseOver);
			node.addEventListener('mouseout', handleMouseOut);
			return () => {
				node.removeEventListener('mouseover', handleMouseOver);
				node.removeEventListener('mouseout', handleMouseOut);
			};
		}
	}, [ref, handleMouseOver, handleMouseOut]);

	return !!value;
};

useHover.PropTypes = {
	ref: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({current: PropTypes.instanceOf(Element)}),
	]).isRequired,
	callbackIn: PropTypes.func,
	callbackOut: PropTypes.func,
};